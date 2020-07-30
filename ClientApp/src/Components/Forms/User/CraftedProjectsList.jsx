import React, { Component } from 'react';
import { amountOfCraftedProjectsOnPage } from '../../Data/GlobalValues';
import { GetCraftedProjectList } from '../../GetData/GetCraftedProjectList';

//import { array } from 'prop-types';
class CraftedProjectList extends Component {
  constructor(props) {
    super(props);
    // const oldList = this.props.craftedProjectList;
    this.state = {
      loading: false,
      craftedProjects: [],
    };

    this.btnClick = this.btnClick.bind(this);
  }

  componentDidMount() {
    this.setState({ craftedProjects: this.props.craftedProjectList });
  }
  //the initial list of feedbacks
  // craftedProjectList = this.props.craftedProjectList;

  //total amount of feedbacks for recent freelancers
  // craftedProjectsAmount of feedbacks shown on page (== amountOfFeedbackOnPage but can be changed by button ShowMore )
  shownCraftedProjectsAmount = amountOfCraftedProjectsOnPage;

  renderCraftedProject(data) {
    return (
      <div className="wt-project" key={data.iD}>
        <figure>
          <img src={data.img} alt="description" />
        </figure>
        <div className="wt-projectcontent">
          <h3>{data.name}</h3>
          <a href={data.link}>{data.link}</a>
        </div>
      </div>
    );
  }

  renderTable(craftedProjects) {
    if (craftedProjects !== undefined) {
      return craftedProjects.map((project) =>
        this.renderCraftedProject(project),
      );
    } else return <div> No feedback </div>;
  }

  btnClick(event) {
    event.preventDefault();
    this.shownCraftedProgectsAmount =
      this.shownCraftedProgectsAmount + amountOfCraftedProjectsOnPage;
    let newCraftedProjects = GetCraftedProjectList(
      this.state.iD,
      this.shownCraftedProjectsAmount,
      this.state.value,
    );
    if (newCraftedProjects !== 'undefined') {
      let projects = this.state.craftedProjects;
      this.setState({ craftedProjects: projects.push(newCraftedProjects) });
    }
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : this.props.craftedProjectList !== undefined ? (
      this.renderTable(this.props.craftedProjectList)
    ) : null;

    return (
      <form className="wt-clientfeedback" ref={(el) => (this.instance = el)}>
        <div
          className="wt-usertitle wt-titlewithselect"
          ref={(el) => (this.instance = el)}
        >
          <div className="wt-craftedprojects">
            <div className="wt-usertitle">
              <h2>Crafted Projects</h2>
            </div>
            <div className="wt-projects">
              {contents}

              <button className="wt-btn" onClick={this.btnClick}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CraftedProjectList;
