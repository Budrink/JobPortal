import React, { Component } from 'react';
import { amountOfEducationsOnPage } from '../../Data/GlobalValues';
// import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserEduicationList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    for (let i = 0; i < amountOfEducationsOnPage; i++) {
      oldList.push(this.props.educationList[i]);
    }
    // console.log(JSON.stringify(oldList));
    this.state = {
      educationList: oldList,
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
      i <= this.props.educationList.length - 1 &&
      i < (this.state.pageNumber + 1) * amountOfEducationsOnPage;
      i++
    ) {
      newList.push(this.props.educationList[i]);
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
    // console.log(JSON.stringify(skills));
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
      this.state.educationList !== undefined ? (
        this.renderTable(this.state.educationList)
      ) : (
        <div> No skills </div>
      );

    return (
      <div className="wt-experience wt-education">
        <div className="wt-usertitle">
          <h2>Education</h2>
        </div>

        <div className="wt-experiencelisting-hold">{contents}</div>
        <div className="wt-btnarea">
          <button className="wt-btn" onClick={this.btnClick}>
            Load More
          </button>
        </div>

        {/* <div className="wt-btnarea">
            <button onClick={this.btnClick}>View More</button>
          </div> */}
      </div>
    );
  }
}

export default UserEduicationList;
