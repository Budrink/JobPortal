import React, { Component } from 'react';
import { amountOfEducationsOnPage } from '../../Data/GlobalValues';
// import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserEduicationList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    let buttonVisible = true;
    if (this.props.educationList === undefined) {
      oldList = [];
      buttonVisible = false;
    } else if (this.props.educationList.length <= amountOfEducationsOnPage) {
      oldList = this.props.educationList;
      buttonVisible = false;
    } else {
      oldList = this.props.educationList.slice(0, amountOfEducationsOnPage);
    }
    this.state = {
      educationList: oldList,
      pageNumber: 1,
      buttonVisible: buttonVisible,
    };
    this.btnClick = this.btnClick.bind(this);
  }

  // skillList = this.props.skillList;
  btnClick(event) {
    event.preventDefault();
    let newList = [];
    for (
      let i = 0;
      i <= this.props.educationList.length - 1 &&
      i < (this.state.pageNumber + 1) * amountOfEducationsOnPage;
      i++
    ) {
      newList.push(this.props.educationList[i]);
      if (
        (this.state.pageNumber + 1) * amountOfEducationsOnPage >=
        this.props.educationList.length - 1
      ) {
        this.setState({ buttonVisible: false });
      }
    }

    this.setState({ educationList: newList });
    // console.log(JSON.stringify(oldList));
    this.setState({ pageNumber: this.state.pageNumber + 1 });

    // loadScripts1(this.instance, false);
  }
  renderEducation(data) {
    // console.log(JSON.stringify(data));

    return (
      <div className="wt-experiencelisting wt-bgcolor">
        <div className="wt-title">
          <h3>{data.education.title}</h3>
        </div>
        <div className="wt-experiencecontent">
          <ul className="wt-userlisting-breadcrumb">
            <li>
              <span>
                <i className="far fa-building"></i>
                {data.education.companyName}
              </span>
            </li>
            <li>
              <span>
                <i className="far fa-calendar"></i> {data.education.beginDate}(
                ({data.education.endDate})
              </span>
            </li>
          </ul>
          <div className="wt-description">
            <p>{data.education.description}</p>
          </div>
        </div>
      </div>
    );
  }

  renderTable(educations) {
    if (educations !== undefined) {
      return educations.map((education) => (
        <div className="form-group" key={education.iD}>
          {this.renderEducation({ education })}
        </div>
      ));
    } else return <div> No education </div>;
  }

  render() {
    // console.log(JSON.stringify(this.props.experienceList));
    let contents =
      this.state.educationList.length > 0 ? (
        this.renderTable(this.state.educationList)
      ) : (
        <div> No Education </div>
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
      <div className="wt-experience wt-education">
        <div className="wt-usertitle">
          <h2>Education</h2>
        </div>

        <div className="wt-experiencelisting-hold">{contents}</div>
        <div className="wt-btnarea">
          {/* <button className="wt-btn" onClick={this.btnClick}>
            Load More
          </button> */}
          {button}
        </div>
      </div>
    );
  }
}

export default UserEduicationList;
