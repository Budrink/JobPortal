import React, { Component } from 'react';
import { amountOfSkillsOnPage } from '../../Data/GlobalValues';
import loadScripts1 from '../../Functions/LoadScripts';

//import { array } from 'prop-types';
class UserSkillsList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    for (let i = 0; i < amountOfSkillsOnPage; i++) {
      oldList.push(this.props.skillList[i]);
    }
    // console.log(JSON.stringify(oldList));
    this.state = {
      skillList: oldList,
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
      i <= this.props.skillList.length - 1 &&
      i < (this.state.pageNumber + 1) * amountOfSkillsOnPage;
      i++
    ) {
      newList.push(this.props.skillList[i]);
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
    // console.log(JSON.stringify(skills));
    if (skills !== undefined) {
      return skills.map((skill) => (
        <div className="form-group" key={skill.skill.iD}>
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
            <button onClick={this.btnClick}>View More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserSkillsList;
