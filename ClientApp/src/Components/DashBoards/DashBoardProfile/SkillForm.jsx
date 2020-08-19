import React, { Component } from 'react';
import loadScripts1 from '../../Functions/LoadScripts';
import SkillOption from './SkillOption';
import { GetSkillList } from '../../GetData/GetSkillList';
class SkillForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 90,
      loading: true,
      skilId: undefined,
      userSkills: [],
      skillList: [],
      buttonClass: [],
      newSkills: undefined,
    };

    this.AddSkill = this.AddSkill.bind(this);
    this.ChangeSkill = this.ChangeSkill.bind(this);
    this.RemoveSkill = this.RemoveSkill.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.ChangePercent = this.ChangePercent.bind(this);
  }
  style1 = 'lnr lnr-pencil';
  style2 = 'lnr lnr-checkmark-circle';
  buttonpensil = {
    background: '#55acee',
    color: 'white',
  };
  buttoncheck = {
    background: '#00cc8d',
    color: 'white',
  };
  buttondelete = {
    background: '#ff5851',
    color: 'white',
  };

  ChangePercent = (changedSkill, event) => {
    let newSkills;
    if (this.state.newSkills === undefined) {
      newSkills = this.state.userSkills;
    } else {
      newSkills = this.state.newSkills;
    }

    let value = Number(event.target.value);
    let skills = newSkills.map((oldSkill) =>
      oldSkill.skill.iD === changedSkill.iD
        ? { skill: changedSkill, percent: value }
        : oldSkill,
    );
    this.setState({ newSkills: skills });
  };

  ChangeSkill = (skill) => {
    //change the style of button in selected row
    let oldStyle = this.state.buttonClass.filter(
      (style) => style.iD === skill.iD,
    )[0];
    let istyle;
    ///Change the style of button
    if (oldStyle !== undefined) {
      istyle = oldStyle.style;
    } else oldStyle = this.style1;
    let newStyle = istyle === this.style1 ? this.style2 : this.style1;
    //the array of the new styles of buttons including the changed one
    let styles = this.state.buttonClass.map((oldClass) =>
      oldClass.iD !== skill.iD
        ? oldClass
        : { iD: oldClass.iD, style: newStyle },
    );
    // Change the skill
    if (this.state.newSkills === undefined) {
      this.setState({ buttonClass: styles });
      return;
    }
    let newSkills = this.state.newSkills.filter(
      (newskill) => newskill.skill.iD === skill.iD,
    );

    if (newSkills.length === 0) {
      this.setState({ buttonClass: styles });
      return;
    }
    let newSkill = newSkills[0];
    if (newStyle === this.style1) {
      let skills = this.state.userSkills.map((oldSkill) =>
        oldSkill.skill.iD !== skill.iD ? oldSkill : newSkill,
      );
      this.setState({ userSkills: skills }, () => {
        this.setState({ buttonClass: styles });
      });
      this.props.handleSkillsChange(skills);
      return;
    }
    this.setState({ buttonClass: styles });
  };
  RemoveSkill = (skill) => {
    let skills = this.state.userSkills;
    skills = skills.filter((oldSkill) => oldSkill.skill.iD !== skill.iD);
    this.setState({ userSkills: skills });
    this.props.handleSkillsChange(skills);
  };

  handleChange = (event) => {
    event.preventDefault();
    const input = event.target;
    const value = input.value;
    const name = input.name;
    this.setState({ [name]: value });
  };

  AddSkill(event) {
    event.preventDefault();
    console.log(this.state.skillId);
    if (this.state.skillId === undefined) {
      return;
    }
    let skills = this.state.skillList.filter(
      (skill) => skill.iD === this.state.skillId,
    );
    let newSkill;
    if (skills === undefined) return;
    else newSkill = skills[0];
    console.log(newSkill);
    if (this.state.userSkills !== undefined) {
      if (
        this.state.userSkills.filter((skill) => skill.skill.iD === newSkill.iD)
          .length !== 0
      ) {
        return;
      } else {
        let skills = this.state.userSkills;
        skills.push({
          skill: newSkill,
          percent: this.state.percent,
        });
        console.log(skills);
        this.populateData(skills);
      }
    } else {
      let skills = [{ skill: newSkill, percent: this.state.percent }];
      this.props.handleSkillsChange(skills);
      this.populateData(skills);
    }
  }

  renderSkill(data) {
    let style = this.state.buttonClass.filter(
      (style) => style.iD === data.skill.skill.iD,
    )[0];

    let istyle;
    let buttonstyle;
    if (style !== undefined) {
      istyle = style.style;
      buttonstyle =
        istyle === this.style1 ? this.buttonpensil : this.buttoncheck;
    } else {
      istyle = this.style1;
      buttonstyle = this.buttonpensil;
    }
    let redactorContent;
    if (istyle === this.style1) {
      redactorContent = (
        <span className="">
          {data.skill.skill.name} (
          <em className="skill-val"> {data.skill.percent}</em>%)
        </span>
      );
    } else {
      redactorContent = (
        <span className="skill-dynamic-field">
          <input
            name="skills[1][percentage]"
            type="text"
            defaultValue={data.skill.percent}
            onChange={(e) => this.ChangePercent(data.skill.skill, e)}
          />
        </span>
      );
    }
    return (
      <li key={data.skill.skill.id}>
        <div className="wt-dragdroptool">
          <button className="lnr lnr-menu" />
        </div>
        {redactorContent}
        <div className="wt-rightarea">
          <button
            className="wt-addinfo"
            style={buttonstyle}
            // style={{ color: '#fff' }}
            onClick={() => this.ChangeSkill(data.skill.skill)}
          >
            <i className={istyle}></i>
          </button>
          <button
            className="wt-deleteinfo"
            style={this.buttondelete}
            // style={{ color: '#fff' }}
            onClick={() => this.RemoveSkill(data.skill.skill)}
          >
            <i className="lnr lnr-trash" />
          </button>
        </div>
      </li>
    );
  }
  async componentDidMount() {
    await this.populateData(this.props.userSkills);
    //loadScripts1(this.instance, false);
  }
  renderTable(skills) {
    if (this.state.loading === false) {
      return skills.map((skill) => this.renderSkill({ skill }));
    } else return <div> Loading... </div>;
  }

  async populateData(userSkills) {
    if (this.state.skillList.length === 0) {
      const data = await GetSkillList();
      this.setState({ skillList: data });
    }
    let styles = userSkills.map((skill) => {
      let style = { iD: skill.skill.iD, style: this.style1 };
      return style;
    });
    this.setState({ buttonClass: styles }, () => {
      this.setState({ userSkills: userSkills }, () => {
        this.setState({ loading: false }, () => {
          // loadScripts1(this.instance, false);
        });
      });
    });
  }

  render() {
    let skillTable = this.renderTable(this.state.userSkills);
    let contents = this.state.loading ? (
      <div>
        <em>Loading...</em>
      </div>
    ) : (
      <div className="wt-skills" ref={(el) => (this.instance = el)}>
        <div className="wt-tabscontenttitle">
          <h2>My Skills</h2>
        </div>
        <div className="wt-skillscontent-holder">
          <form className="wt-formtheme wt-skillsform">
            <fieldset>
              <div className="form-group">
                <div className="form-group-holder">
                  <SkillOption
                    skillList={this.state.skillList}
                    handleChange={this.handleChange}
                  />
                  <input
                    name="percent"
                    className="form-control"
                    type="number"
                    placeholder="Rate Your Skill (0% to 100%)"
                    onChange={this.handleChange}
                    value={this.state.percent}
                  />
                </div>
              </div>
              <div className="form-group wt-btnarea">
                <button className="wt-btn" onClick={this.AddSkill}>
                  Add Skills
                </button>
              </div>
            </fieldset>
          </form>
          <div className="wt-myskills">
            <ul className="sortable list">{skillTable}</ul>
          </div>
        </div>
      </div>
    );

    // );
    return contents;
  }
}
export default SkillForm;
