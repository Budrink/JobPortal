import React, { Component } from 'react';
import { amountOfCraftedProjectsOnPage } from '../../Data/GlobalValues';
// import { GetCraftedProjectList } from '../../GetData/GetCraftedProjectList';

//import { array } from 'prop-types';
class CraftedProjectList extends Component {
  constructor(props) {
    super(props);
    let oldList = [];
    let buttonVisible = true;
    if (this.props.educationList === undefined) {
      buttonVisible = false;
    } else if (
      this.props.craftedProjectList.length <= amountOfCraftedProjectsOnPage
    ) {
      oldList = this.props.craftedProjectList;
      buttonVisible = false;
    } else {
      oldList = this.props.craftedProjectList.slice(
        0,
        amountOfCraftedProjectsOnPage,
      );
    }
    this.state = {
      loading: false,
      craftedProjects: oldList,
      pageNumber: 1,
      buttonVisible: buttonVisible,
    };

    this.btnClick = this.btnClick.bind(this);
  }

  componentDidMount() {
    // this.setState({ craftedProjects: this.props.craftedProjectList });
  }

  shownCraftedProjectsAmount = amountOfCraftedProjectsOnPage;

  renderCraftedProject(data) {
    return (
      <div className="wt-project" key={data.id}>
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
    let newList = [];
    for (
      let i = 0;
      i <= this.props.craftedProjectList.length - 1 &&
      i < (this.state.pageNumber + 1) * amountOfCraftedProjectsOnPage;
      i++
    ) {
      newList.push(this.props.craftedProjectList[i]);
      if (
        (this.state.pageNumber + 1) * amountOfCraftedProjectsOnPage >=
        this.props.craftedProjectList.length - 1
      ) {
        this.setState({ buttonVisible: false });
      }
    }
    this.setState({ craftedProjects: newList });
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : this.props.craftedProjectList !== undefined ? (
      this.renderTable(this.props.craftedProjectList)
    ) : null;

    let button =
      this.state.buttonVisible === true ? (
        <button className="wt-btn" onClick={this.btnClick}>
          Load More
        </button>
      ) : (
        <div></div>
      );
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
              {button}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CraftedProjectList;
