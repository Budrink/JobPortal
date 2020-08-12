import React from 'react';
import { Link } from 'react-router-dom';
import { amountOfProjectItemsInList } from '../../Data/GlobalValues';
import Paging from '../../Forms/Paging';
import { GetSavedProjectList } from '../../GetData/GetSavedProjectList';
import FavouriteButton from '../../Forms/FavouriteButton';

class SavedJobList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      projectList: [],
      amountOfItemsOnPage: amountOfProjectItemsInList,
      pageNumber: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);

    //  const { projectiD } = this.props;
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }
  populateData = async () => {
    const data = await GetSavedProjectList(
      localStorage.getItem('userId'),
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
    );
    this.setState({ projectList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  };
  componentDidMount() {
    this.populateData();
  }
  pagingCreate(pageName) {
    if (this.state.projectList !== undefined) {
      return (
        <Paging
          linkName="SavedJobList"
          totalAmountOfItems={
            this.state.projectList.projectList.totalAmountOfProjects
          }
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  createFeaturedContent(featured) {
    return featured ? (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : null;
  }

  CreateProject(project) {
    return (
      <div
        className="wt-userlistinghold wt-featured wt-dashboradsaveditems"
        key={project.jobId}
      >
        {this.createFeaturedContent(project.company.verifiedCompany)}
        <div className="wt-userlistingcontent">
          <div className="wt-contenthead wt-dashboardsavehead">
            <div className="wt-title">
              <Link to={`/CompanySingle/:${project.company.companyId}`}>
                <i className="fa fa-check-circle"></i>
                {project.company.companyName}
              </Link>
              <h2>{project.title}</h2>
            </div>
            <ul className="wt-saveitem-breadcrumb wt-userlisting-breadcrumb">
              <li>
                <span className="wt-dashboraddoller">
                  <i className="fa fa-dollar-sign"></i>
                  {project.qualification}
                </span>
              </li>
              <li>
                <span>
                  <img
                    src={project.company.country.countryFlag}
                    alt={project.company.country.countryName}
                  />
                  {project.company.country.countryName}
                </span>
              </li>
              <li>
                <a href="#" className="wt-clicksavefolder">
                  <i className="far fa-folder"></i>
                  Type: {project.type}
                </a>
              </li>
              <li>
                <span className="wt-dashboradclock">
                  <i className="far fa-clock"></i>
                  Duration: {project.duration}
                </span>
              </li>
              <li>
                <FavouriteButton saved={project.saved} itemType="job" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    let paging = this.state.loading ? null : this.pagingCreate();
    let content = this.state.loading ? (
      <div>Loading....</div>
    ) : (
      <div className="wt-yourdetails">
        <div className="wt-tabscontenttitle">
          <h2>Saved Jobs</h2>
        </div>

        <div className="wt-dashboradsaveitem">
          {this.state.projectList.projectList.projects.map((project) =>
            this.CreateProject(project),
          )}
        </div>
      </div>
    );
    return (
      <div>
        {content}
        <div style={({ alignContent: 'center' }, { justifyContent: 'center' })}>
          {paging}
        </div>
      </div>
    );
  }
}

export default SavedJobList;
