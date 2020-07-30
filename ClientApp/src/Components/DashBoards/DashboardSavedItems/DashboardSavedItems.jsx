import React from 'react';
import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/themify-icons.css';
import '../../../css/font-awesome.min.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/jquery-ui.css';
import '../../../css/linearicons.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/dashboard.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/dbresponsive.css';
import { amountOfProjectItemsInList } from '../../Data/GlobalValues';
import Header1 from '../../Header/Header1';
import { loadScripts } from '../../Functions/LoadScripts';
import LeftMenu from '../../Header/LeftMenu';
import { GetSavedFreelancers } from '../../GetData/GetSavedFreelancers';
import { GetSavedCompanyList } from '../../GetData/GetSavedCompanyList';
import { GetSavedProjectList } from '../../GetData/GetSavedProjectList';
import SavedCompanyList from './SavedCompanyList';
import SavedJobList from './SavedJobList';
import SavedFreelancerList from './SavedFreelancerList';

class DashboardSavedItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      projectList: [],
      freelancerList: [],
      jobList: [],
      amountOfItemsOnPage: amountOfProjectItemsInList,
      pageNumber: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  companyId = this.props.match.params.userId;
  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  populateData = async () => {
    const userId = localStorage.getItem('userId');
    let data = await GetSavedFreelancers(userId);
    this.setState({ freelancerList: data });
    data = await GetSavedProjectList(userId);
    this.setState({ jobList: data });
    data = await GetSavedCompanyList(userId);
    this.setState({ companyList: data }, () => {
      this.setState({ loading: false }, () => {});
      loadScripts(this.instance, false);
    });
  };

  componentDidMount() {
    this.populateData();
  }

  render() {
    let content = !this.state.loading ? (
      <div className="wt-login">
        <title>Completed Jobs</title>

        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 />
            <div id="wt-main" className="wt-main wt-haslayout">
              <LeftMenu />
              {/*Register Form Start*/}
              <section className="wt-haslayout wt-dbsectionspace">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                    <div className="wt-dashboardbox wt-dashboardtabsholder wt-saveitemholder">
                      <div className="wt-dashboardtabs">
                        <ul className="wt-tabstitle nav navbar-nav">
                          <li className="nav-item">
                            <a
                              className="active"
                              data-toggle="tab"
                              href="#wt-skills"
                            >
                              Saved Jobs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a data-toggle="tab" href="#wt-education">
                              Followed Companies
                            </a>
                          </li>
                          <li className="nav-item">
                            <a data-toggle="tab" href="#wt-awards">
                              Liked Freelancers
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-tabscontent tab-content tab-savecontent">
                        <div
                          className="wt-personalskillshold tab-pane active fade show"
                          id="wt-skills"
                        >
                          <SavedJobList />
                        </div>
                        <div
                          className="wt-educationholder tab-pane fade"
                          id="wt-education"
                        >
                          <SavedCompanyList />
                        </div>
                        <div
                          className="wt-awardsholder tab-pane fade"
                          id="wt-awards"
                        >
                          <SavedFreelancerList />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <aside
                      id="wt-sidebar"
                      className="wt-sidebar wt-dashboardsave"
                    >
                      <div className="wt-proposalsr">
                        <div className="wt-proposalsrcontent">
                          <figure>
                            <img src="/images/save-1.png" alt="image" />
                          </figure>
                          <div className="wt-title">
                            <h3>{this.state.jobList.totalAmountOfProjects}</h3>
                            <span>Jobs you saved</span>
                          </div>
                        </div>
                      </div>
                      <div className="wt-proposalsr">
                        <div className="wt-proposalsrcontent wt-componyfolow">
                          <figure>
                            <img src="/images/save-2.png" alt="image" />
                          </figure>
                          <div className="wt-title">
                            <h3>
                              {this.state.companyList.totalAmountOfCompanies}
                            </h3>
                            <span>Companies you followed</span>
                          </div>
                        </div>
                      </div>
                      <div className="wt-proposalsr">
                        <div className="wt-proposalsrcontent  wt-freelancelike">
                          <figure>
                            <img src="/images/save-3.png" alt="image" />
                          </figure>
                          <div className="wt-title">
                            <h3>
                              {
                                this.state.freelancerList
                                  .totalAmountOfFreelancers
                              }
                            </h3>
                            <span>Freelancers you liked</span>
                          </div>
                        </div>
                      </div>
                    </aside>
                    <div className="wt-companyad">
                      <figure className="wt-companyadimg">
                        <img src="/images/add-img.jpg" alt="img description" />
                      </figure>
                      <span>Advertisement 255px X 255px</span>
                    </div>
                  </div>
                </div>
              </section>

              {/*Register Form End*/}

              {/*Main End*/}
            </div>
          </div>
          {/*Content Wrapper End*/}
        </div>
        {/*Wrapper End*/}
      </div>
    ) : (
      <div>Loading ...</div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}

export default DashboardSavedItems;
