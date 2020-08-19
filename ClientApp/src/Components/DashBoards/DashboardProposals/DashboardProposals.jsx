import React from 'react';
import { Link } from 'react-router-dom';
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
import { amountOfProposalsInList } from '../../Data/GlobalValues';
import Header1 from '../../Header/Header1';
import { loadScripts } from '../../Functions/LoadScripts';
import LeftMenu from '../../Header/LeftMenu';
import { GetProposals } from '../../GetDataNew/GetProposals';
import Paging from '../../Forms/Paging';
import { HireFreelancer } from '../../PostData/HireFreelancer';
import Modal from '../../Functions/Modal';
class DashboardProposals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      proposalList: [],
      totalAmountOfProposals: 0,
      job: '',
      amountOfItemsOnPage: amountOfProposalsInList,
      pageNumber: 1,
      showMessage: '',
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.hireFreelancer = this.hireFreelancer.bind(this);
    // this.showMessage = this.showMessage.bind(this);
  }
  jobId = this.props.match.params.jobId;

  closeWindowPortal() {
    this.setState({ showMessage: '' });
  }
  clickShowMessage(e, proposalId) {
    this.setState({ showMessage: proposalId });
  }
  hireFreelancer(e, freelancerId, proposalId) {
    e.preventDefault();
    HireFreelancer(
      localStorage.getItem('userId'),
      freelancerId,
      this.state.job.jobId,
      proposalId,
    );
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  populateData = async () => {
    const data = await GetProposals(this.jobId);
    this.setState({ job: data.job }, () => {
      this.setState(
        { totalAmountOfProposals: data.totalAmountOfProposals },
        () => {
          this.setState({ proposalList: data.proposals }, () =>
            this.setState({ loading: false }),
          );
        },
      );
    });
    loadScripts(this.instance, false);
  };

  componentDidMount() {
    this.populateData();
  }
  pagingCreate() {
    if (this.state.proposalList !== undefined) {
      return (
        <Paging
          linkName="DashboardProposals"
          totalAmountOfItems={this.state.totalAmountOfProposals}
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }
  CreateFeaturedContent(featured) {
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
  createProposals() {
    return this.state.proposalList.map((pr) => (
      <li key={pr.freelancer.userId}>
        <figure>
          <img
            className="mCS_img_loaded"
            alt="img description"
            src={pr.freelancer.userPhoto}
          />
        </figure>
      </li>
    ));
  }
  UserRating(userRates) {
    let style = ['', '', '', '', ''];
    if (userRates !== undefined) {
      for (let i = 0; i < Math.round(Number(userRates)); i++) {
        style[i] = 'active';
      }
    }
    return style;
  }
  createAttachments(proposal) {
    if (proposal.attachments === undefined) {
      return (
        <div className="wt-hireduserstatus">
          <i className="fa fa-paperclip" />
          <span>0 file attached</span>
        </div>
      );
    } else {
      return (
        <div className="wt-hireduserstatus">
          <i className="fa fa-paperclip" />
          <span>{proposal.attachments.length} file attached</span>
          {proposal.attachments.map((att) => (
            <span key={att.iD}>
              <a href={att.link} style={{ color: '#323232' }}>
                {att.name}
              </a>
            </span>
          ))}
        </div>
      );
    }
  }
  createMessageWindow(message, proposalId) {
    if (this.state.showMessage === proposalId) {
      // this.setState({ showMessage: '' });
      return (
        <Modal isOpen={true}>
          <h2>Cover message</h2>
          <div>{message}</div>
          {/* <button onClick={() => this.closeWindowPortal()}>Close</button> */}
        </Modal>
      );
    } else return null;
  }
  createProposalList() {
    return this.state.proposalList.map((pr) => (
      <div
        className="wt-userlistinghold wt-featured wt-proposalitem"
        key={pr.freelancer.userId}
      >
        {this.CreateFeaturedContent(pr.freelancer.plusMember)}
        <figure className="wt-userlistingimg">
          <img
            src={pr.freelancer.userPhoto}
            alt="user photop"
            className="mCS_img_loaded"
          />
        </figure>
        <div className="wt-proposaldetails">
          <div className="wt-contenthead">
            <div className="wt-title">
              <Link to={`/UserSingle/${pr.freelancer.userId}`}>
                {pr.freelancer.firstName} {'   '} {pr.freelancer.lastName}
              </Link>
            </div>
          </div>
          <div className="wt-proposalfeedback">
            <span className="wt-starcontent">
              <div className="rating-mini">
                <span
                  className={this.UserRating(pr.freelancer.userRates)[0]}
                ></span>
                <span
                  className={this.UserRating(pr.freelancer.userRates)[1]}
                ></span>
                <span
                  className={this.UserRating(pr.freelancer.userRates)[2]}
                ></span>
                <span
                  className={this.UserRating(pr.freelancer.userRates)[3]}
                ></span>
                <span
                  className={this.UserRating(pr.freelancer.userRates)[4]}
                ></span>
              </div>
              {pr.freelancer.userRates}/<i>5</i>
              <em> ({pr.freelancer.feedbacksCount} Feedback)</em>
            </span>
          </div>
        </div>
        <div className="wt-rightarea">
          <div className="wt-btnarea">
            <button
              className="wt-btn"
              onClick={(e) =>
                this.hireFreelancer(e, pr.freelancer.userId, pr.iD)
              }
            >
              Hire Now
            </button>
          </div>
          <div className="wt-hireduserstatus">
            <h5>{pr.terms}</h5>
            <span>In {this.state.job.duration}</span>
          </div>
          <div className="wt-hireduserstatus">
            <button onClick={(e) => this.clickShowMessage(e, pr.iD)}>
              {this.createMessageWindow(pr.coverLetter, pr.iD)}
              <i className="far fa-envelope" />
              <span>Cover Letter</span>
            </button>
          </div>
          {this.createAttachments(pr)}
        </div>
      </div>
    ));
  }

  render() {
    let content = !this.state.loading ? (
      <div className="wt-login">
        <title>Proposals</title>

        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 />
            <div id="wt-main" className="wt-main wt-haslayout">
              <LeftMenu />
              {/*Register Form Start*/}
              <section className="wt-haslayout wt-dbsectionspace wt-proposals">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-9">
                    <div className="wt-dashboardbox">
                      <div className="wt-dashboardboxtitle">
                        <h2>Manage Jobs</h2>
                      </div>
                      <div className="wt-dashboardboxcontent wt-rcvproposala">
                        <div className="wt-userlistinghold wt-featured wt-userlistingvtwo">
                          {this.CreateFeaturedContent(
                            this.state.job.company.verifiedCompany,
                          )}
                          <div className="wt-userlistingcontent">
                            <div className="wt-contenthead">
                              <div className="wt-title">
                                <Link
                                  to={`/CompanySingle/${this.state.job.company.companyId}`}
                                >
                                  <i className="fa fa-check-circle" />{' '}
                                  {this.state.job.company.companyName}
                                </Link>
                                <h2>{this.state.job.title}</h2>
                              </div>
                              <ul className="wt-saveitem-breadcrumb wt-userlisting-breadcrumb">
                                <li>
                                  <span className="wt-dashboraddoller">
                                    <i className="fa fa-dollar-sign" />
                                    {this.state.job.qualification}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <img
                                      className="mCS_img_loaded"
                                      alt="img description"
                                      src={
                                        this.state.job.company.country
                                          .countryFlag
                                      }
                                    />
                                    {this.state.job.company.country.countryName}
                                  </span>
                                </li>
                                <li>
                                  <span className="wt-clicksavefolder">
                                    <i className="far fa-folder" /> Type:
                                    {this.state.job.type}
                                  </span>
                                </li>
                                <li>
                                  <span className="wt-dashboradclock">
                                    <i className="far fa-clock" /> Duration:
                                    {this.state.job.duration}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="wt-rightarea">
                              <div className="wt-hireduserstatus">
                                <h4> {this.state.totalAmountOfProposals}</h4>
                                <span>Proposals Received</span>
                                <ul className="wt-hireduserimgs">
                                  {this.createProposals()}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wt-freelancerholder wt-rcvproposalholder">
                          <div className="wt-tabscontenttitle">
                            <h2>Received Proposals</h2>
                          </div>
                          {this.createProposalList()}
                        </div>
                      </div>
                      {this.pagingCreate()}
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-8 col-lg-5 col-xl-3">
                    <aside
                      className="wt-sidebar wt-dashboardsave"
                      id="wt-sidebar"
                    >
                      <div className="wt-proposalsr">
                        <div className="wt-proposalsrcontent">
                          <figure>
                            <img alt="img" src="/images/thumbnail/img-17.png" />
                          </figure>
                          <div className="wt-title">
                            <h3>
                              {this.state.job.company.amountOngoingProjects}
                            </h3>
                            <span>Total Ongoing Jobs</span>
                          </div>
                        </div>
                      </div>
                      <div className="wt-proposalsr">
                        <div className="wt-proposalsrcontent wt-componyfolow">
                          <figure>
                            <img alt="img" src="/images/thumbnail/img-16.png" />
                          </figure>
                          <div className="wt-title">
                            <h3>
                              {this.state.job.company.amountCompletedProjects}
                            </h3>
                            <span>Total Completed Jobs</span>
                          </div>
                        </div>
                      </div>
                      <div className="wt-proposalsr">
                        <div className="wt-proposalsrcontent  wt-freelancelike">
                          <figure>
                            <img alt="img" src="/images/thumbnail/img-15.png" />
                          </figure>
                          <div className="wt-title">
                            <h3>
                              {this.state.job.company.amountCancelledProjects}
                            </h3>
                            <span>Total Cancelled Jobs</span>
                          </div>
                        </div>
                      </div>
                    </aside>
                    <div className="wt-companyad">
                      <figure className="wt-companyadimg">
                        <img alt="img description" src="/images/add-img.jpg" />
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

export default DashboardProposals;
