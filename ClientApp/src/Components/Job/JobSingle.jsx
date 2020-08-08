import React from 'react';
import { Link } from 'react-router-dom';
// import { FC, memo } from 'react';
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
import Header1 from '../Header/Header1';
import Footer from '../Footer/Footer';
import { GetJob } from '../GetDataNew/GetJob';
import { any } from 'prop-types';
import loadScripts from '../Functions/LoadScripts';
import ComplainForm from '../Forms/ComplainForm';
import FavouriteButton from '../Forms/FavouriteButton';
class JobSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      job: any,
      iD: any,
      loading: true,
      complain: { reason: '', text: '' },
    };
    this.submitComplain = this.submitComplain.bind(this);
    this.handleChangeComplainReason = this.handleChangeComplainReason.bind(
      this,
    );
    this.handleTextComplainChange = this.handleTextComplainChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  iD = this.props.match.params.jobId;
  Logout() {
    this.props.history.push('/Home');
  }
  //We got the first time the first feedbacks
  populateData = async (iD) => {
    const data = await GetJob(iD, 1);
    // this.setState({ feedbackList: data.userFeedbacks }, () => {});

    // this.setState({ craftedProjectList: data.craftedProjects }, () => {});
    this.setState({ job: data.job }, () => {
      this.setState({ loading: false }, () => {});
    });
  };

  submitComplain(event) {
    event.preventDefault();
    if (this.state.complain.reason === '') {
      return;
    }
    if (this.state.complain.text === '') {
      return;
    }
    window.alert(
      'reason ' +
        this.state.complain.reason +
        'text ' +
        this.state.complain.text,
    );
  }

  handleChangeComplainReason(reason) {
    let newReason;
    if (reason === 'reason') newReason = '';
    else newReason = reason;
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

  componentDidMount() {
    this.populateData(this.iD);

    loadScripts(this.instance, false);
  }
  createMarkup() {
    return { __html: this.state.job.jobDetails };
  }

  createSkills(job) {
    if (job === undefined)
      return job.skillsRequired.map((skill) => (
        <Link href="/skill" key={skill.iD}>
          skill.Name
        </Link>
      ));
    else return null;
  }

  createSkillContent() {
    let skills;
    if (this.state.job !== undefined) {
      skills = this.createSkills(this.state.job);
      return <div className="wt-tag wt-widgettag">{skills}</div>;
    } else return null;
  }
  createAttList() {
    if (this.state.job.Attachments !== undefined)
      return this.state.job.Attachments.map((att) => (
        <li key={att.fileName}>
          <span> {att.fileName}</span>
          <em>
            {att.fileSize} kb
            <a href={att.linkString}>
              <i className="lnr lnr-download"></i>
            </a>
          </em>
        </li>
      ));
    else return null;
  }

  attachementContent() {
    let attList = this.createAttList();
    return <ul className="wt-attachfile">{attList}</ul>;
  }

  render() {
    let contentProfessional =
      this.state.job.qualification === 'Professional' ? (
        <span>
          <i className="fa fa-dollar-sign"></i>
          <i className="fa fa-dollar-sign"></i>
          <i className="fa fa-dollar-sign"></i>
          Professional
        </span>
      ) : this.state.job.qualification === 'Intermediate' ? (
        <span>
          <i className="fa fa-dollar-sign"></i>
          <i className="fa fa-dollar-sign"></i>
          Intermediate
        </span>
      ) : (
        <span>
          <i className="fa fa-dollar-sign"></i>
          Beginner
        </span>
      );
    let skillContent =
      this.state.loading === true ? null : this.createSkillContent();
    let atts =
      this.state.loading === true ? (
        <div> loading.....</div>
      ) : (
        this.attachementContent()
      );
    let verifiedCompany = this.state.job.verifiedCompany
      ? this.state.job.verifiedCompany
      : null;

    let mainContent =
      this.state.loading === true ? (
        <div> loading.....</div>
      ) : (
        <div>
          <title>Jon Single</title>
          <link href="apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="images/favicon.png" rel="icon" type="image/x-icon" />
          <link href="css/bootstrap.min.css" rel="stylesheet" />
          <link href="css/normalize.css" rel="stylesheet" />
          {/* Wrapper Start */}
          <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
            {/* Content Wrapper Start */}
            <div className="wt-contentwrapper">
              {/* Header Start */}
              <Header1 Logout={this.Logout} />
              {/*Header End*/}
              {/*Inner Home Banner Start*/}
              <div className="wt-haslayout wt-innerbannerholder">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                      <div className="wt-innerbannercontent">
                        <div className="wt-title">
                          <h2>Job Detail</h2>
                        </div>
                        <ol className="wt-breadcrumb">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/JobListing">Jobs</Link>
                          </li>
                          <li className="wt-active">Job Detail</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Inner Home End*/}
              {/*Main Start*/}
              <main
                className="wt-main wt-haslayout wt-innerbgcolor"
                id="wt-main"
              >
                <div className="wt-haslayout wt-main-section">
                  {/* User Listing Start*/}
                  <div className="container">
                    <div className="row">
                      <div
                        className="wt-twocolumns wt-haslayout"
                        id="wt-twocolumns"
                      >
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left">
                          <div className="wt-proposalholder">
                            <span className="wt-featuredtag">
                              <img
                                className="template-content tipso_style"
                                alt="img description"
                                src="/images/featured.png"
                                data-tipso="Plus Member"
                              />
                            </span>
                            <div className="wt-proposalhead">
                              <h2>{this.state.job.title}</h2>
                              <ul className="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
                                <li>{contentProfessional}</li>
                                <li>
                                  <span>
                                    <img
                                      src={
                                        this.state.job.company.country
                                          .countryFlag
                                      }
                                      alt={
                                        this.state.job.company.country
                                          .countryName
                                      }
                                    />
                                    {this.state.job.company.country.countryName}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="far fa-folder"></i> Type:{' '}
                                    {this.state.job.type}
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="far fa-clock"></i> Duration:{' '}
                                    {this.state.job.duration}
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="wt-btnarea">
                              <a className="wt-btn" href="javascrip:void(0);">
                                Send Proposal
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                          <div className="wt-projectdetail-holder">
                            <div className="wt-projectdetail">
                              <div className="wt-title">
                                <h3>Project Detail</h3>
                              </div>
                              <div
                                className="wt-description"
                                dangerouslySetInnerHTML={this.createMarkup()}
                              ></div>
                            </div>
                            <div className="wt-skillsrequired">
                              <div className="wt-title">
                                <h3>Skills Required</h3>
                              </div>
                              {skillContent}
                            </div>
                            <div className="wt-attachments">
                              <div className="wt-title">
                                <h3>Attachments</h3>
                              </div>
                              {atts}
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                          <aside className="wt-sidebar" id="wt-sidebar">
                            <div className="wt-proposalsr">
                              <div className="wt-proposalsrcontent">
                                <span className="wt-proposalsicon">
                                  <i className="fa fa-angle-double-down" />
                                  <i className="fa fa-newspaper" />
                                </span>
                                <div className="wt-title">
                                  <h3>{this.state.job.proposalsCount}</h3>
                                  <span>
                                    Proposals Received Till
                                    <em>June 27, 2018</em>
                                  </span>
                                </div>
                              </div>
                              <div className="tg-authorcodescan">
                                <figure className="tg-qrcodeimg">
                                  <img
                                    alt="description"
                                    src="/images/qrcode.png"
                                  />
                                </figure>
                                <div className="tg-qrcodedetail">
                                  <span className="lnr lnr-laptop-phone" />
                                  <div className="tg-qrcodefeat">
                                    <h3>
                                      Scan with your <span>Smart Phone </span>
                                      To Get It Handy.
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="wt-clicksavearea">
                                <span>Job ID: {this.state.job.jobId}</span>
                                {/* { <a className="wt-clicksavebtn" href="/">
                                  <i className="far fa-heart" /> Click to save
                                </a>  */}
                                <FavouriteButton
                                  saved={this.state.job.saved}
                                  itemType="job"
                                />
                              </div>
                            </div>
                            <div className="wt-widget wt-companysinfo-jobsingle">
                              <div className="wt-companysdetails">
                                <figure className="wt-companysimg">
                                  <img
                                    alt="img description"
                                    src="/images/company/img-01.jpg"
                                  />
                                </figure>
                                <div className="wt-companysinfo">
                                  <figure>
                                    <img
                                      alt="img description"
                                      src="/images/company/img-01.png"
                                    />
                                  </figure>
                                  <div className="wt-title">
                                    <a>
                                      <i className="fa fa-check-circle" />
                                      {verifiedCompany}
                                    </a>
                                    <h2>
                                      {this.state.job.company.companyName}
                                    </h2>
                                  </div>
                                  <ul className="wt-postarticlemeta">
                                    <li>
                                      <Link
                                        to={`/JobListing?company=${this.state.job.company.companyId}$ ? status='ongoing' `}
                                      >
                                        <span>Open Jobs</span>
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        to={`/CompanySingle/:${this.state.job.company.companyId}`}
                                      >
                                        <span>Full Profile</span>
                                      </Link>
                                    </li>
                                    <li>
                                      {/* className="wt-following" */}
                                      {/* <a href="/">
                                        <span>Following</span>
                                      </a> */}
                                      <FavouriteButton
                                        saved={this.state.job.company.saved}
                                        itemType="company"
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="wt-widget wt-sharejob">
                              <div className="wt-widgettitle">
                                <h2>Share This Job</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <ul className="wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="/">
                                      <i className="fab fa-facebook-f" />
                                      Share on Facebook
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="/">
                                      <i className="fab fa-twitter" />
                                      Share on Twitter
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="/">
                                      <i className="fab fa-linkedin-in" />
                                      Share on Linkedin
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="/">
                                      <i className="fab fa-google-plus-g" />
                                      Share on Google Plus
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-widget wt-reportjob">
                              <div className="wt-widgettitle">
                                <h2>Report This Job</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <ComplainForm
                                  reasonChange={this.handleChangeComplainReason}
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
                  {/* User Listing End*/}
                </div>
              </main>
              {/*Main End*/}
              {/*Footer Start*/}
              <Footer />
              {/*Footer End*/}
            </div>
            {/*Content Wrapper End*/}
          </div>
          {/*Wrapper End*/}
        </div>
      );
    return <div ref={(el) => (this.instance = el)}>{mainContent}</div>;
  }
}
export default JobSingle;
