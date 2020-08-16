import React, { Component } from 'react';

class SkillOption extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.populateData();
  }
  renderSkill(skill) {
    return (
      <option value={skill} key={skill.iD}>
        {skill.name}
      </option>
    );
  }
  renderTable(skills) {
    if (skills !== []) {
      let table = skills.map((skill) => (
        <option value={skill.id} key={skill.id}>
          {skill.name}
        </option>
      ));
      return (
        <select onChange={this.props.handleChange} name="skillId">
          <option key="0">Select Your Skill</option>
          {table}
        </select>
      );
    } else return <div> Loading ...</div>;
  }

  async populateData() {
    if (this.props.skillList !== 0) {
      this.setState({ skillList: this.props.skillList }, () => {
        this.setState({ loading: false }, () => {});
      });
    }
  }

  render() {
    let table = this.renderTable(this.state.skillList);
    let contents = this.state.loading ? null : table;
    return <span className="wt-select">{contents}</span>;
  }
}

export default SkillOption;
