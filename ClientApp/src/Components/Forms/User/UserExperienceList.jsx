import React, { Component } from 'react';
import { amountOfExperiencesOnPage } from '../../Data/GlobalValues';
// import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserExperienceList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    for (let i = 0; i < amountOfExperiencesOnPage; i++) {
      oldList.push(this.props.experienceList[i]);
    }
    // console.log(JSON.stringify(oldList));
    this.state = {
      experienceList: oldList,
      pageNumber: 1,
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
    }

    this.setState({ experienceList: newList });
    // console.log(JSON.stringify(oldList));
    this.setState({ pageNumber: this.state.pageNumber + 1 });

    // loadScripts1(this.instance, false);
  }
  renderExperience(data) {
    // console.log(JSON.stringify(data));

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
    if (experiences !== undefined) {
      return experiences.map((experience) => (
        <div className="form-group" key={experience.iD}>
          {this.renderExperience({ experience })}
        </div>
      ));
    } else return <div> No skill </div>;
  }

  render() {
    // console.log(JSON.stringify(this.props.experienceList));
    let contents =
      this.state.experienceList !== undefined ? (
        this.renderTable(this.state.experienceList)
      ) : (
        <div> No skills </div>
      );

    return (
      <div className="wt-experience">
        <div className="wt-usertitle">
          <h2>Experience</h2>
        </div>

        <div className="wt-experiencelisting-hold">{contents}</div>
        <div className="wt-btnarea">
          <button className="wt-btn" onClick={this.btnClick}>
            Load More
          </button>
        </div>
      </div>
    );
  }
}

export default UserExperienceList;
