import React, { Component } from 'react';
import { amountOfExperiencesOnPage } from '../../Data/GlobalValues';
// import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserExperienceList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    let buttonVisible = true;
    if (this.props.skillList === undefined) {
      oldList = [];
      buttonVisible = false;
    } else if (this.props.experienceList.length <= amountOfExperiencesOnPage) {
      oldList = this.props.experienceList;
      buttonVisible = false;
    } else {
      oldList = this.props.experienceList.slice(0, amountOfExperiencesOnPage);
    }

    this.state = {
      experienceList: oldList,
      pageNumber: 1,
      buttonVisible: buttonVisible,
    };
    // console.log(JSON.stringify(this.state.skillList));
    // this.handleChange = this.handleChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  // skillList = this.props.skillList;
  btnClick(event) {
    event.preventDefault();
    let newList = [];
    for (
      let i = 0;
      i <= this.props.experienceList.length - 1 &&
      i < (this.state.pageNumber + 1) * amountOfExperiencesOnPage;
      i++
    ) {
      newList.push(this.props.experienceList[i]);
      if (
        (this.state.pageNumber + 1) * amountOfExperiencesOnPage >=
        this.props.skillList.length - 1
      ) {
        this.setState({ buttonVisible: false });
      }
    }

    this.setState({ experienceList: newList });
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }
  renderExperience(data) {
    return (
      <div className="wt-experiencelisting wt-bgcolor">
        <div className="wt-title">
          <h3>{data.experience.title}</h3>
        </div>
        <div className="wt-experiencecontent">
          <ul className="wt-userlisting-breadcrumb">
            <li>
              <span>
                <i className="far fa-building"></i>
                {data.experience.companyName}
              </span>
            </li>
            <li>
              <span>
                <i className="far fa-calendar"></i> {data.experience.beginDate}{' '}
                - ({data.experience.endDate})
              </span>
            </li>
          </ul>
          <div className="wt-description">
            <p>{data.experience.description}</p>
          </div>
        </div>
      </div>
    );
  }

  renderTable(experiences) {
    // console.log(JSON.stringify(skills));
    console.log(experiences);
    if (experiences !== undefined && experiences.length > 0) {
      return experiences.map((experience) => (
        <div className="form-group" key={experience.id}>
          {this.renderExperience({ experience })}
        </div>
      ));
    } else return <div> No skill </div>;
  }

  render() {
    let contents =
      this.state.experienceList !== undefined ? (
        this.renderTable(this.state.experienceList)
      ) : (
        <div> No skills </div>
      );
    let button =
      this.state.buttonVisible === true ? (
        <button className="wt-btn" onClick={this.btnClick}>
          Load More
        </button>
      ) : (
        <div></div>
      );

    return (
      <div className="wt-experience">
        <div className="wt-usertitle">
          <h2>Experience</h2>
        </div>

        <div className="wt-experiencelisting-hold">{contents}</div>
        <div className="wt-btnarea">{button}</div>
      </div>
    );
  }
}

export default UserExperienceList;
