import React, { Component } from 'react';
import { amountOfSkillsOnPage } from '../../Data/GlobalValues';
import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserSkillsList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    let buttonVisible = true;
    if (this.props.skillList === undefined) {
      oldList = [];
      buttonVisible = false;
    } else if (this.props.skillList.length <= amountOfSkillsOnPage) {
      oldList = this.props.skillList;
      buttonVisible = false;
    } else {
      oldList = this.props.skillList.slice(0, amountOfSkillsOnPage);
    }

    this.state = {
      skillList: oldList,
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
      i <= this.props.skillList.length - 1 &&
      i < (this.state.pageNumber + 1) * amountOfSkillsOnPage;
      i++
    ) {
      newList.push(this.props.skillList[i]);
      if (
        (this.state.pageNumber + 1) * amountOfSkillsOnPage >=
        this.props.skillList.length - 1
      ) {
        this.setState({ buttonVisible: false });
      }
    }

    this.setState({ skillList: newList });
    // console.log(JSON.stringify(oldList));
    this.setState({ pageNumber: this.state.pageNumber + 1 });

    loadScripts1(this.instance, false);
  }
  renderSkill(data) {
    // console.log(JSON.stringify(this.props.skillList[0]));
    return (
      <div className="wt-skillholder" data-percent={data.skill.percent + '%'}>
        <span>
          {data.skill.skill.name} <em>{data.skill.percent} %</em>
        </span>
        <div className="wt-skillbarholder">
          <div className="wt-skillbar"></div>
        </div>
      </div>
    );
  }

  renderTable(skills) {
    // console.log(skills);
    if (skills !== undefined) {
      return skills.map((skill) => (
        <div className="form-group" key={skill.skill.id}>
          {this.renderSkill({ skill })}
        </div>
      ));
    } else return <div> No skill </div>;
  }

  render() {
    let contents =
      this.state.skillList !== undefined ? (
        this.renderTable(this.state.skillList)
      ) : (
        <div> No skills </div>
      );
    let button =
      this.state.buttonVisible === true ? (
        <button onClick={this.btnClick}>View More</button>
      ) : (
        <div></div>
      );
    return (
      <div id="wt-ourskill" className="wt-widget">
        <div className="wt-widgettitle">
          <h2>My Skills</h2>
        </div>
        <div
          className="wt-widgetcontent wt-skillscontent"
          ref={(el) => (this.instance = el)}
        >
          {contents}
          <div className="wt-btnarea">
            {/* <button onClick={this.btnClick}>View More</button> */}
            {button}
          </div>
        </div>
      </div>
    );
  }
}

export default UserSkillsList;
