import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import FavouriteButton from '../Forms/FavouriteButton';
// import { getProjectList } from '../GetData/GetProjectList';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      //  projectList: [],
      // loading: true,
      SearchProject: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fullprojectList = [];

  handleChange(event) {
    const target = event.target;
    if (target.name === 'SearchProject') {
      this.setState({ SearchProject: event.target.value });
    } else {
      const value = target.checked;
      const name = target.name;
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchProject !== '') {
    let cats;
    if (this.fullprojectList !== []) {
      cats = this.fullprojectList.filter(
        (cat) => cat.projectName.search(this.state.SearchProject) !== -1,
      );
    } else cats = [];
    this.setState({ projectList: cats });
    // }
  }

  renderTagList(data) {
    if (data) {
      return data.map((skill) => (
        <Link to={`/JobListing?category=$[{skill.name}]`} key={skill.id}>
          {skill.name}
        </Link>
      ));
    } else return null;
  }

  renderProject(data) {
    let content;
    if (data.project.skillsRequired !== undefined)
      content = this.renderTagList(data.project.skillsRequired);
    else content = null;
    let featuredProjectContent = data.project.verifiedCompany ? (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : null;

    return (
      <div
        className="wt-userlistinghold wt-featured wt-userlistingholdvtwo"
        key={data.project.jobId}
      >
        {featuredProjectContent}
        <div className="wt-userlistingcontent">
          <div className="wt-contenthead">
            <div className="wt-title">
              <Link to={`/JobSingle/${data.project.jobId}`}>
                <i className="fa fa-check-circle" />
                {data.project.company.companyName}
              </Link>
              <h2>{data.project.title}</h2>
            </div>
            <div className="wt-description">
              <p>{data.project.jobDetails}</p>
            </div>
            <div className="wt-tag wt-widgettag">{content}</div>
          </div>
          <div className="wt-viewjobholder">
            <ul>
              <li>
                <span>
                  <i className="fa fa-dollar-sign wt-viewjobdollar"></i>
                  {data.project.qualification}
                </span>
              </li>
              <li>
                <span>
                  <em>
                    <img
                      src={data.project.company.country.countryFlag}
                      alt="country Flag"
                    />
                  </em>
                  {data.project.company.country.countryName}
                </span>
              </li>
              <li>
                <span>
                  <i className="far fa-folder wt-viewjobfolder"></i>
                  Type: {data.project.type}
                </span>
              </li>
              <li>
                <span>
                  <i className="far fa-clock wt-viewjobclock"></i>
                  Duration: {data.project.duration}
                </span>
              </li>
              <li>
                <span>
                  <i className="fa fa-tag wt-viewjobtag"></i>
                  Job ID: {data.project.jobId}
                </span>
              </li>
              <li>
                <FavouriteButton
                  saved={data.project.company.saved}
                  itemType="company"
                />
                {/* <Link to="/" className="wt-clicklike wt-clicksave">
                  <i className="fa fa-heart"></i> Save
                </Link> */}
              </li>
              <li className="wt-btnarea">
                <Link to={`/JobSingle/${data.project.jobId}`}>View Job</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   this.populateData();
  // }
  renderTable(cats) {
    if (cats !== []) {
      return cats.projects.map((project) => (
        <div className="form-group" key={project.jobId}>
          {this.renderProject({ project })}
        </div>
      ));
    } else return <div> Loading </div>;
  }

  render() {
    let projectList = this.props.projectList.projectList;

    // JSON.stringify(projectList.projectList.projects);
    // );
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : projectList.projects.length > 0 ? (
      this.renderTable(projectList)
    ) : (
      <div></div>
    );

    // );
    return <div ref={(el) => (this.instance = el)}>{contents}</div>;
  }
}
ProjectList = reduxForm({
  form: 'ProjectList',
})(ProjectList);

export default ProjectList;
