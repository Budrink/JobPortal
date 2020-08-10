/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../../css/bootstrap.min.css';
import '../../css/normalize.css';
import '../../css/scrollbar.css';
import '../../css/fontawesome/fontawesome-all.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.min.css';
import '../../css/linearicons.css';
import '../../css/jquery-ui.css';
import '../../css/tipso.css';
import '../../css/chosen.css';
import '../../css/prettyPhoto.css';
import '../../css/main.css';
import '../../css/color.css';
import '../../css/transitions.css';
import '../../css/responsive.css';
import '../../css/display.css';
import Header1 from '../Header/Header1';
import Footer from '../Footer/Footer';
import { GetFreelancer } from '../GetDataNew/GetFreelancer';
import { any } from 'prop-types';
import loadScripts1 from '../Functions/LoadScripts';
import ClientFeedBackList from '../Forms/User/ClientFeedbackList';
import { amountOfFeedbackOnPage } from '../Data/GlobalValues';
import { GetFeedbackList } from '../GetDataNew/GetFeedBackList';
import CraftedProjectList from '../Forms/User/CraftedProjectsList';
import UserSkillsList from '../Forms/User/UserSkillList';
import UserExperienceList from '../Forms/User/UserExperienceList';
import UserEducationList from '../Forms/User/UserEducationList';
import UserTags from '../Forms/User/UserTags';
import ComplainForm from '../Forms/ComplainForm';
import ProjectOfferForm from '../Forms/ProjectOfferForm';
import FavouriteButton from '../Forms/FavouriteButton';
import { SendComplain } from '../PostData/SendComplain';
class UserSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      freelancer: any,
      iD: any,
      loading: true,
      feedbackPageNumber: 1,
      feedbackList: any,
      craftedProjectList: any,
      complain: { reason: '', text: '' },
    };
    this.submitComplain = this.submitComplain.bind(this);
    this.handleChangeComplainReason = this.handleChangeComplainReason.bind(
      this,
    );
    this.handleTextComplainChange = this.handleTextComplainChange.bind(this);
    this.Logout = this.Logout.bind(this);
    this.ScrolltoReportUser = this.ScrolltoReportUser.bind(this);
  }
  Logout() {
    this.props.history.push('/Home');
  }
  scrollToBottom = () => {
    this.End.scrollIntoView({ behavior: 'smooth' });
  };

  ScrolltoReportUser() {
    this.scrollToBottom();
  }

  submitComplain(event) {
    event.preventDefault();
    if (this.state.complain.reason === '') {
      return;
    }
    if (this.state.complain.text === '') {
      return;
    }
    SendComplain(
      localStorage.getItem('userId'),
      this.state.freelancer.userId,
      this.state.reason,
      this.state.text,
    );
  }

  handleChangeComplainReason(reason) {
    let newReason;
    if (reason === 'reason') newReason = '';
    else newReason = reason;
    //   console.log(reason);
    let complain = { reason: newReason, text: this.state.complain.text };
    this.setState({ complain: complain });
  }

  handleTextComplainChange(complainText) {
    let complain = {
      reason: this.state.complain.reason,
      text: complainText,
    };
    this.setState({ complain: complain });
  }

  iD = this.props.match.params.userId;
  // iD = this.props.params.userId;
  // iD = 4;
  //We got the first time the first feedbacks
  populateData = async (iD) => {
    console.log(iD);
    const data = await GetFreelancer(iD, 1, amountOfFeedbackOnPage);
    this.setState({ feedbackList: data.userFeedbacks }, () => {});

    this.setState({ craftedProjectList: data.craftedProjects }, () => {});
    // console.log(JSON.stringify(this.state.craftedProjectList));
    this.setState({ freelancer: data }, () => {});
    this.setState({ loading: false }, () => {});
    loadScripts1(this.instance, false);
  };

  // componentWillMount() {
  //   this.populateData(this.iD);
  // }
  componentDidMount() {
    this.populateData(this.iD);
  }
  /// the button on feedbacks

  async handleFeedbackSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {});
    let data = await GetFeedbackList(
      this.props.userId,
      amountOfFeedbackOnPage,
      this.state.feedbackPageNumber,
    );
    this.setState({ feedbackList: data });
    //   this.state.amountOfItemsOnPage,
    //    this.state.rateFilter,
    // );

    this.setState({ loading: false }, () => {});
  }

  createMarkup() {
    return { __html: this.state.freelancer.userDescription };
  }

  render() {
    // let skillContent;
    // if (this.state.freelancer.userSkills !== undefined)
    //   skillContent = this.renderTagList(this.state.freelancer.userSkills);
    // else skillContent = null;
    let featuredUserContent = this.state.freelancer.plusMember ? (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : null;

    let mainContent =
      this.state.loading === true ? (
        <div> loading.....</div>
      ) : (
        <div ref={(el) => (this.instance = el)}>
          <div className="wt-login">
            {/*<!-- Wrapper Start --> */}
            <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
              {/* <!-- Content Wrapper Start --> */}
              <div className="wt-contentwrapper">
                {/* <!-- Header Start --> */}
                <Header1
                  ref={(el) => (this.instance = el)}
                  Logout={this.Logout}
                />
                {/* <!--Header End-->
	    		<!--Inner Home Banner Start--> */}
                <div className="wt-haslayout wt-innerbannerholder wt-innerbannerholdervtwo">
                  <div className="container">
                    <div className="row justify-content-md-center">
                      <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3"></div>
                    </div>
                  </div>
                </div>
                {/* <!--Inner Home End-->
			<!--Main Start--> */}
                <main
                  id="wt-main"
                  className="wt-main wt-haslayout wt-innerbgcolor"
                >
                  {/* <!-- User Profile Start--> */}
                  <div className="wt-main-section wt-paddingtopnull wt-haslayout">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                          <div className="wt-userprofileholder">
                            {featuredUserContent}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-3 float-left">
                              <div className="row">
                                <div className="wt-userprofile">
                                  <figure>
                                    <img
                                      src={this.state.freelancer.userPhoto}
                                      alt={this.state.freelancer.userName}
                                    />
                                    <div className="wt-userdropdown wt-online"></div>
                                  </figure>
                                  <div
                                    className="wt-title"
                                    style={{ width: '600 px' }}
                                  >
                                    <h3>
                                      <i className="fa fa-check-circle"></i>
                                      {this.state.freelancer.userName}
                                    </h3>
                                    <span>
                                      {this.state.freelancer.userRates} /5
                                      <a>
                                        ( {this.state.freelancer.feedbacksCount}
                                        Feedback)
                                      </a>
                                      <br />
                                      Member since
                                      {this.state.freelancer.joinDate}
                                      <br />
                                      {/* <a href="javascript.html">
                                        @valentine20658
                                      </a> */}
                                      <button
                                        onClick={this.ScrolltoReportUser}
                                        className="wt-reportuser"
                                      >
                                        Report User
                                      </button>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-9 float-left">
                              <div className="row">
                                <div className="wt-proposalhead wt-userdetails">
                                  <h2>{this.state.freelancer.title}</h2>
                                  <ul className="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
                                    <li>
                                      <span>
                                        <i className="far fa-money-bill-alt"></i>
                                        $ {this.state.freelancer.hourRates}/ hr
                                      </span>
                                    </li>
                                    <li>
                                      <span>
                                        <img
                                          src={
                                            this.state.freelancer.country
                                              .countryFlag
                                          }
                                          alt={
                                            this.state.freelancer.country
                                              .countryName
                                          }
                                        />
                                        {
                                          this.state.freelancer.country
                                            .countryName
                                        }
                                      </span>
                                    </li>
                                    <li>
                                      <FavouriteButton
                                        saved={this.state.freelancer.saved}
                                        itemType="freelancer"
                                      />
                                    </li>
                                  </ul>
                                  <div className="wt-description">
                                    {this.state.freelancer.description}
                                  </div>
                                </div>
                                <div
                                  id="wt-statistics"
                                  className="wt-statistics wt-profilecounter"
                                >
                                  <div className="wt-statisticcontent wt-countercolor1">
                                    <h3
                                      data-from="0"
                                      data-to={
                                        this.state.freelancer
                                          .amountOngoingProjects
                                      }
                                      data-speed="800"
                                      data-refresh-interval="03"
                                    >
                                      {
                                        this.state.freelancer
                                          .amountOngoingProjects
                                      }
                                    </h3>
                                    <h4>
                                      Ongoing <br />
                                      Projects
                                    </h4>
                                  </div>
                                  <div className="wt-statisticcontent wt-countercolor2">
                                    <h3
                                      data-from="0"
                                      data-to={
                                        this.state.freelancer
                                          .amountCompletedProjects
                                      }
                                      data-speed="8000"
                                      data-refresh-interval="100"
                                    >
                                      {
                                        this.state.freelancer
                                          .amountCompletedProjects
                                      }
                                    </h3>
                                    <h4>
                                      Completed <br />
                                      Projects
                                    </h4>
                                  </div>
                                  <div className="wt-statisticcontent wt-countercolor4">
                                    <h3
                                      data-from="0"
                                      data-to={
                                        this.state.freelancer
                                          .amountCancelledProjects
                                      }
                                      data-speed="800"
                                      data-refresh-interval="02"
                                    >
                                      {
                                        this.state.freelancer
                                          .amountCancelledProjects
                                      }
                                    </h3>
                                    <h4>
                                      Cancelled <br />
                                      Projects
                                    </h4>
                                  </div>
                                  <div className="wt-statisticcontent wt-countercolor3">
                                    <h3
                                      data-from="0"
                                      data-to={
                                        this.state.freelancer.servedHours
                                      }
                                      data-speed="8000"
                                      data-refresh-interval="100"
                                    >
                                      {this.state.freelancer.servedHours}
                                    </h3>
                                    <em>k</em>
                                    <h4>
                                      Served <br />
                                      Hours
                                    </h4>
                                  </div>
                                  <div className="wt-description">
                                    <p>{this.state.freelancer.remark}</p>
                                    <a
                                      href="#"
                                      className="wt-btn"
                                      data-toggle="modal"
                                      data-target="#reviewermodal"
                                    >
                                      Send Offer
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- User Profile End-->
					<!-- User Listing Start--> */}
                    <div className="container">
                      <div className="row">
                        <div
                          id="wt-twocolumns"
                          className="wt-twocolumns wt-haslayout"
                        >
                          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                            <div className="wt-usersingle">
                              <ClientFeedBackList
                                feedbackList={this.state.feedbackList}
                                feedbacksAmount={
                                  this.state.freelancer.feedbacksCount
                                }
                              />
                              {/* <div className="wt-projects"> */}
                              <CraftedProjectList
                                craftedProjectList={
                                  this.state.craftedProjectList
                                }
                                iD={this.iD}
                              />
                              <UserExperienceList
                                experienceList={
                                  this.state.freelancer.experience
                                }
                              />
                              <UserEducationList
                                educationList={this.state.freelancer.education}
                              />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                            <aside id="wt-sidebar" className="wt-sidebar">
                              <div id="wt-ourskill" className="wt-widget">
                                <UserSkillsList
                                  skillList={this.state.freelancer.userSkills}
                                />
                              </div>

                              <div className="wt-widget wt-widgetarticlesholder wt-articlesuser">
                                <div className="wt-widgettitle">
                                  <h2>Awards &amp; Certifications</h2>
                                </div>
                                <div className="wt-widgetcontent">
                                  <div className="wt-particlehold">
                                    <figure>
                                      <img
                                        src="/images/thumbnail/img-07.jpg"
                                        alt=" description"
                                      />
                                    </figure>
                                    <div className="wt-particlecontent">
                                      <h3>
                                        <a href="javascript.html">
                                          Top PHP Excel Skills
                                        </a>
                                      </h3>
                                      <span>
                                        <i className="lnr lnr-calendar"></i> Jun
                                        27, 2018
                                      </span>
                                    </div>
                                  </div>
                                  <div className="wt-particlehold">
                                    <figure>
                                      <img
                                        src="/images/thumbnail/img-08.jpg"
                                        alt=" description"
                                      />
                                    </figure>
                                    <div className="wt-particlecontent">
                                      <h3>
                                        <a href="javascript.html">
                                          Monster Developer Award
                                        </a>
                                      </h3>
                                      <span>
                                        <i className="lnr lnr-calendar"></i> Apr
                                        27, 2018
                                      </span>
                                    </div>
                                  </div>
                                  <div className="wt-particlehold">
                                    <figure>
                                      <img
                                        src="/images/thumbnail/img-09.jpg"
                                        alt="description"
                                      />
                                    </figure>
                                    <div className="wt-particlecontent">
                                      <h3>
                                        <a href="javascript.html">
                                          Best Communication 2015
                                        </a>
                                      </h3>
                                      <span>
                                        <i className="lnr lnr-calendar"></i> May
                                        27, 2018
                                      </span>
                                    </div>
                                  </div>
                                  <div className="wt-particlehold">
                                    <figure>
                                      <img
                                        src="/images/thumbnail/img-10.jpg"
                                        alt=" description"
                                      />
                                    </figure>
                                    <div className="wt-particlecontent">
                                      <h3>
                                        <a href="javascript.html">
                                          Best Logo Design Winner
                                        </a>
                                      </h3>
                                      <span>
                                        <i className="lnr lnr-calendar"></i> Aug
                                        27, 2018
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wt-proposalsr">
                                <div className="tg-authorcodescan tg-authorcodescanvtwo">
                                  <figure className="tg-qrcodeimg">
                                    <img
                                      src="/images/qrcode.png"
                                      alt="img description"
                                    />
                                  </figure>
                                  <div className="tg-qrcodedetail">
                                    <span className="lnr lnr-laptop-phone"></span>
                                    <div className="tg-qrcodefeat">
                                      <h3>
                                        Scan with your <span>Smart Phone </span>{' '}
                                        To Get It Handy.
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <UserTags
                                tagList={this.state.freelancer.tagList}
                              />

                              <div className="wt-widget wt-sharejob">
                                <div className="wt-widgettitle">
                                  <h2>Share This User</h2>
                                </div>
                                <div className="wt-widgetcontent">
                                  <ul className="wt-socialiconssimple">
                                    <li className="wt-facebook">
                                      <a href="javascript.html">
                                        <i className="fab fa-facebook-f"></i>
                                        Share on Facebook
                                      </a>
                                    </li>
                                    <li className="wt-twitter">
                                      <a href="javascript.html">
                                        <i className="fab fa-twitter"></i>Share
                                        on Twitter
                                      </a>
                                    </li>
                                    <li className="wt-linkedin">
                                      <a href="jav.html">
                                        <i className="fab fa-linkedin-in"></i>
                                        Share on Linkedin
                                      </a>
                                    </li>
                                    <li className="wt-googleplus">
                                      <a href="jav.html">
                                        <i className="fab fa-google-plus-g"></i>
                                        Share on Google Plus
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="wt-widget wt-reportjob">
                                <div
                                  ref={(el) => {
                                    this.End = el;
                                  }}
                                ></div>
                                <div className="wt-widgettitle">
                                  <h2>Report This User</h2>
                                </div>
                                <div className="wt-widgetcontent">
                                  <ComplainForm
                                    reasonChange={
                                      this.handleChangeComplainReason
                                    }
                                    textChange={this.handleTextComplainChange}
                                    onClick={this.submitComplain}
                                  />
                                </div>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- User Listing End--> */}
                  </div>
                </main>
                {/* <!--Main End-->
			<!--Footer Start--> */}
                <Footer />
                {/* <!--Footer End--> */}
              </div>
              {/* <!--Content Wrapper End--> */}
            </div>
            {/* <!--Wrapper End-->
	<!-- Popup Start--> */}
            <div
              className="modal fade wt-offerpopup"
              tabIndex={-1}
              role="dialog"
              id="reviewermodal"
            >
              <div className="modal-dialog" role="document">
                <div className="wt-modalcontent modal-content">
                  <div className="wt-popuptitle">
                    <h2>Send a Project Offer</h2>
                    <a className="wt-closebtn close">
                      <i
                        className="fa fa-close"
                        data-dismiss="modal"
                        aria-label="Close"
                      ></i>
                    </a>
                  </div>
                  <ProjectOfferForm
                    freelancerId={this.state.freelancer.userId}
                  />
                </div>
              </div>
            </div>
            {/* <!-- Popup End-->  */}
          </div>
        </div>
      );
    return (
      <div ref={(el) => (this.instance = el)}>
        {/* <Helmet> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/images/favicon.png" rel="icon" type="image/x-icon" /> */}
        {/* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
          <script src="js/vendor/jquery-3.3.1.js"></script> */}
        {/* / </Helmet> */}
        {mainContent}
      </div>
    );
  }
}

export default UserSingle;
