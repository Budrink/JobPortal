import React, { Component } from 'react';
// import { amountOfEducationsOnPage } from '../../Data/GlobalValues';
// import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserAwardsList extends Component {
  constructor(props) {
    super(props);
    // let oldList = [];
    // let buttonVisible = true;
    // if (this.props.educationList === undefined) {
    //   oldList = [];
    //   buttonVisible = false;
    // } else if (this.props.educationList.length <= amountOfEducationsOnPage) {
    //   oldList = this.props.educationList;
    //   buttonVisible = false;
    // } else {
    //   oldList = this.props.educationList.slice(0, amountOfEducationsOnPage);
    // }
    // this.state = {
    //   educationList: oldList,
    //   pageNumber: 1,
    //   buttonVisible: buttonVisible,
    // };
  }

  // skillList = this.props.skillList;
  // btnClick(event) {
  //   event.preventDefault();
  //   let newList = [];
  //   for (
  //     let i = 0;
  //     i <= this.props.educationList.length - 1 &&
  //     i < (this.state.pageNumber + 1) * amountOfEducationsOnPage;
  //     i++
  //   ) {
  //     newList.push(this.props.educationList[i]);
  //     if (
  //       (this.state.pageNumber + 1) * amountOfEducationsOnPage >=
  //       this.props.educationList.length - 1
  //     ) {
  //       this.setState({ buttonVisible: false });
  //     }
  //   }

  //   this.setState({ educationList: newList });
  //   // console.log(JSON.stringify(oldList));
  //   this.setState({ pageNumber: this.state.pageNumber + 1 });

  //   // loadScripts1(this.instance, false);
  // }
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

  renderTable(awards) {
    if (awards !== undefined) {
      return awards.map((award) => (
        <div className="wt-particlehold">
          <figure>
            <img src={award.img} alt=" description" />
          </figure>
          <div className="wt-particlecontent">
            <h3>
              <a href="#">{award.title}</a>
            </h3>
            <span>
              <i className="lnr lnr-calendar"></i>
              {award.date}
            </span>
          </div>
        </div>
      ));
    } else return <div> No awards </div>;
  }

  render() {
    // console.log(JSON.stringify(this.props.experienceList));
    let contents =
      this.props.awardsList.length > 0 ? (
        this.renderTable(this.props.awardsList)
      ) : (
        <div> No Awards </div>
      );

    return (
      <div className="wt-widget wt-widgetarticlesholder wt-articlesuser">
        <div className="wt-widgettitle">
          <h2>Awards &amp; Certifications</h2>
        </div>
        <div className="wt-widgetcontent">{contents}</div>
      </div>
    );
  }
}

export default UserAwardsList;
