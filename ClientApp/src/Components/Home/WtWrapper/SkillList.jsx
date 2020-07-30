import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetSkillList } from '../../GetData/GetSkillList';

class SkillList extends Component {
  constructor(props) {
    super(props);
    // {handleCategoryChange} = this.props;
    this.state = {
      skillList: [],
      loading: true,
      isActive: true,
      // CheckedCategories: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.populateData(this.props.amountOfItems);
  }

  async populateData(amountOfItems) {
    let data;
    if (this.state.loading === true) {
      if (amountOfItems !== undefined) {
        data = await GetSkillList(amountOfItems);
      } else {
        data = await GetSkillList();
      }
    } else {
      data = await GetSkillList();
      this.setState({ isActive: false });
    }
    this.setState({ skillList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  }

  renderCategory(data) {
    const name = data.skill.name.replace('&', '%26');
    return (
      <li key={data.skill.iD}>
        <Link to={`/UserListing?skill=${name}`}>{data.skill.name}</Link>
      </li>
    );
  }

  renderTable(skills) {
    if (skills !== []) {
      return skills.map((skill) => this.renderCategory({ skill }));
    } else return <div> Loading </div>;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.populateData();
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(this.state.skillList)
    );
    let btnContent = this.state.isActive ? (
      <li className="wt-viewmore">
        <button onClick={this.handleSubmit}>+ View All</button>
      </li>
    ) : null;

    return (
      <ul className="wt-fwidgetcontent">
        {contents}
        {btnContent}
      </ul>
    );
  }
}

export default SkillList;
