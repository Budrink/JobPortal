import React, { Component } from 'react';
import { RepostJob, DeleteJob } from '../PostDataNew/PostData';
import { Link } from 'react-router-dom';
import HiredFreelancersList from './HiredFreelancersList';
import ProposalsList from './ProposalsList';

class JobList extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      projectList: [],
      // loading: true,
      SearchProject: '',
      // CheckedCategories: [],
    };

    this.handleRepost = this.handleRepost.bind(this);
    this.handlDelete = this.handlDelete.bind(this);
  }
  fullprojectList = [];

  handleRepost(jobId, event) {
    event.preventDefault();
    if (RepostJob(jobId) === true) {
      this.props.PopulateData();
      return;
    }
  }

  handlDelete(jobId, event) {
    event.preventDefault();
    if (DeleteJob(jobId) === true) {
      this.props.PopulateData();
      return;
    }
  }

  renderProject(data) {
    let featuredProjectContent = data.project.verifiedCompany ? (
      <span className="wt-featuredtagcolor3">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    );
    let buttonContent;

    switch (this.props.type) {
      case 'cancel':
        buttonContent = (
          <div className="wt-rightarea">
            <div className="wt-btnarea">
              <button
                onClick={(e) => this.handleRepost(data.project.jobId, e)}
                className="wt-btn"
              >
                Repost
              </button>
              <button
                onClick={(e) => this.handlDelete(data.project.jobId, e)}
                className="wt-cancelbtn"
              >
                Delete
              </button>
            </div>
          </div>
        );
        break;
      case 'complete':
        buttonContent = (
          <div className="wt-rightarea">
            <div className="wt-btnarea">
              <span> Project Complete</span>
              <Link to={`/JobSingle/${data.project.jobId}`} className="wt-btn">
                VIEW DETAILS
              </Link>
            </div>
            <HiredFreelancersList
              hiredFreelancers={data.project.hiredFreelancers}
            />
          </div>
        );
        break;
      case 'ongoing':
        buttonContent = (
          <div className="wt-rightarea">
            <div className="wt-btnarea">
              <Link
                to={`/DashboardOngoingJobSingle/${data.project.jobId}`}
                className="wt-btn"
              >
                VIEW DETAILS
              </Link>
            </div>
            {/* <div className="wt-hireduserstatus"> */}
            <HiredFreelancersList
              hiredFreelancers={data.project.hiredFreelancers}
            />
            {/* </div> */}
          </div>
        );
        break;
      case 'manage':
        buttonContent = (
          <div className="wt-rightarea">
            <div className="wt-btnarea">
              <Link
                to={`/DashboardOngoingJobSingle/${data.project.jobId}`}
                className="wt-btn"
              >
                VIEW DETAILS
              </Link>
            </div>
            {/* <div className="wt-hireduserstatus"> */}
            {/* <div class="wt-hireduserstatus">
															<h4>01</h4><span>Proposals</span>
															<ul class="wt-hireduserimgs">
																<li><figure><img src="images/user/userlisting/img-05.jpg" alt="img description"></figure></li>
															</ul>
														</div>
													</div> */}
            <ProposalsList jobId={data.project.jobId} />
            {/* </div> */}
          </div>
        );
        break;
      default:
        buttonContent = null;
        break;
    }

    return (
      <div className="wt-userlistinghold wt-featured wt-userlistingvtwo">
        {featuredProjectContent}
        <div className="wt-userlistingcontent wt-userlistingcontentvtwo">
          <div className="wt-contenthead">
            <div className="wt-title">
              {/* <Link to={`/UserSingle/${this.props.userId}`}> */}
              <Link to={`/UserSingle/${data.project.company.userId}`}>
                <i className="fa fa-check-circle"></i>
                {data.project.company.firstName +
                  ' ' +
                  data.project.company.lastName}
              </Link>
              <h2>{data.project.title}</h2>
            </div>
            <ul className="wt-saveitem-breadcrumb wt-userlisting-breadcrumb">
              <li>
                <span className="wt-dashboraddoller">
                  <i className="fa fa-dollar-sign"></i>
                  {data.project.qualification}
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={data.project.company.country.countryFlag}
                    alt={data.project.company.country.countryName}
                  />
                  {data.project.company.country.countryName}
                </span>
              </li>
              <li>
                <span className="wt-clicksavefolder">
                  <i className="far fa-folder"></i>
                  Type:{data.project.type}
                </span>
              </li>
              <li>
                <span className="wt-dashboradclock">
                  <i className="far fa-clock"></i> Duration:
                  {data.project.duration}
                </span>
              </li>
            </ul>
          </div>
          {buttonContent}
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   this.populateData();
  // }
  renderTable(cats) {
    console.log(cats);
    if (cats !== []) {
      return cats.projects.map((project) => (
        <div className="form-group" key={project.jobId}>
          {this.renderProject({ project })}
        </div>
      ));
    } else return <div> Loading </div>;
  }

  render() {
    let projectList = this.props.projectList;

    // // console.log(
    // JSON.stringify(projectList.projectList.projects);
    // );
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(projectList)
    );

    // );
    return (
      <div
        className="wt-managejobcontent wt-verticalscrollbar"
        ref={(el) => (this.instance = el)}
      >
        {contents}>
      </div>
    );
  }
}
export default JobList;
