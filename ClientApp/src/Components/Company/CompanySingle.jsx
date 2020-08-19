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
import ProjectList from '../Job/ProjectList';
import FollowersForm from './FollowersForm';
import loadScripts from '../Functions/LoadScripts';
import ComplainForm from '../Forms/ComplainForm';
import { amountOfProjectItemsInList } from '../Data/GlobalValues';
import GetCompany from '../GetData/GetCompany';
import { GetProjectList } from '../GetData/GetProjectList';
import Paging from '../Forms/Paging';
import FavouriteButton from '../Forms/FavouriteButton';

class CompanySingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null,
      iD: null,
      loading: true,
      complain: { reason: '', text: '' },
      projectList: [],
      amountOfProjects: 0,
      pageNumber: 1,
    };
    this.submitComplain = this.submitComplain.bind(this);
    this.handleChangeComplainReason = this.handleChangeComplainReason.bind(
      this,
    );
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleTextComplainChange = this.handleTextComplainChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  iD = this.props.match.params.companyId;

  //We got the first time the first feedbacks
  populateData = async () => {
    const data = await GetCompany(this.iD);
    const projectList = await GetProjectList(
      this.state.pageNumber,
      amountOfProjectItemsInList,
      [],
      [],
      [],
      [],
      [],
      [],
      [this.iD],
      '',
      [''],
    );

    this.setState({ company: data }, () => {});

    this.setState({ projectList: projectList }, () => {});
    this.setState(
      { amountOfProjects: projectList.projectList.totalAmountOfProjects },
      () => {},
    );

    this.setState({ loading: false }, () => {});
    loadScripts(this.instance, false);
  };
  Logout() {
    this.props.history.push('/Home');
  }
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

  componentDidMount() {
    this.populateData(this.state.iD);
  }
  createMarkup() {
    // console.log(this.state.company.companyDescription);
    return { __html: this.state.company.companyDescription };
  }
  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  pagingCreate() {
    if (this.state.projectList !== undefined) {
      return (
        <Paging
          linkName="/CompanySingle"
          totalAmountOfItems={this.state.amountOfProjects}
          amountOfItemsOnPage={amountOfProjectItemsInList}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  render() {
    // let contentProfessional =
    //   this.state.job.qualification === 'Professional' ? (
    //     <span>
    //       <i className="fa fa-dollar-sign"></i>
    //       <i className="fa fa-dollar-sign"></i>
    //       <i className="fa fa-dollar-sign"></i>Link
    //       Professional
    //     </span>
    //   ) : this.state.job.qualification === 'Intermediate' ? (
    //     <span>
    //       <i className="fa fa-dollar-sign"></i>
    //       <i className="fa fa-dollar-sign"></i>
    //       Intermediate
    //     </span>
    //   ) : (
    //     <span>
    //       <i className="fa fa-dollar-sign"></i>
    //       Beginner
    //     </span>
    //   );
    // let skillContent = this.createSkillContent();
    // let atts = this.attachementContent();
    // let verifiedCompany = this.state.job.verifiedCompany
    //   ? this.state.job.verifiedCompany
    //   : null;
    let pagingContext = this.pagingCreate();

    let mainContent =
      this.state.loading === true ? (
        <div> loading.....</div>
      ) : (
        <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
          {/* <!-- Content Wrapper Start --> */}
          <div className="wt-contentwrapper">
            <Header1 Logout={this.Logout} />
            {/*   <!--Header End-->
	        		<!--Inner Home Banner Start--> */}
            <div className="wt-haslayout wt-innerbannerholder">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                    <div className="wt-innerbannercontent">
                      <div className="wt-title">
                        <h2>Company Detail</h2>
                      </div>
                      <ol className="wt-breadcrumb">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/CompanyGrid">Company Grid</Link>
                        </li>
                        <li className="wt-active">Company Detail</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
              <div className="wt-haslayout wt-main-section">
                {/* <!-- User Listing Start--> */}
                <div className="wt-haslayout">
                  <div className="container">
                    <div className="row">
                      <div
                        id="wt-twocolumns"
                        className="wt-twocolumns wt-haslayout"
                      >
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 float-left">
                          <div className="wt-comsingleimg">
                            <figure>
                              <img
                                src="/images/bannerimg/banner.jpg"
                                alt="img description"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                          <aside id="wt-sidebar" className="wt-sidebar">
                            <div className="wt-proposalsr wt-proposalsrvtwo">
                              <div className="wt-widgetcontent wt-companysinfo">
                                <figure>
                                  <img
                                    src={this.state.company.companyImgPng}
                                    alt={this.state.company.companyName}
                                  />
                                </figure>
                                <div className="wt-title">
                                  <Link to="/">
                                    <i className="fa fa-check-circle"></i>
                                    Verified Company
                                  </Link>
                                  <h2>{this.state.company.companyName}</h2>
                                </div>
                              </div>
                              <div className="tg-authorcodescan">
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
                              <div className="wt-clicksavearea">
                                {/* <span>Job ID: tQu5DW9F2G</span> */}
                                <FavouriteButton
                                  saved={this.state.company.saved}
                                  itemType="company"
                                />
                              </div>
                            </div>
                            <div className="wt-widget">
                              <div className="wt-widgettitle">
                                <h2>Company Followers</h2>
                              </div>
                              <FollowersForm
                                companyId={this.state.company.companyId}
                              />
                            </div>
                            <div className="wt-widget wt-sharejob">
                              <div className="wt-widgettitle">
                                <h2>Share This Company</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <ul className="wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <Link to="/">
                                      <i className="fab fa-facebook-f"></i>Share
                                      on Facebook
                                    </Link>
                                  </li>
                                  <li className="wt-twitter">
                                    <Link to="/">
                                      <i className="fab fa-twitter"></i>Share on
                                      Twitter
                                    </Link>
                                  </li>
                                  <li className="wt-linkedin">
                                    <Link to="/">
                                      <i className="fab fa-linkedin-in"></i>
                                      Share on Linkedin
                                    </Link>
                                  </li>
                                  <li className="wt-googleplus">
                                    <Link to="/">
                                      <i className="fab fa-google-plus-g"></i>
                                      Share on Google Plus
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-widget wt-reportjob">
                              <div className="wt-widgettitle">
                                <h2>Report This Company</h2>
                              </div>
                              <ComplainForm />
                            </div>
                          </aside>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                          <div className="wt-userlistingholder wt-haslayout">
                            <div className="wt-comcontent">
                              <div className="wt-title">
                                <h3>
                                  About {'  '}
                                  {this.state.company.companyName}
                                </h3>
                              </div>
                              <div
                                className="wt-description"
                                dangerouslySetInnerHTML={this.createMarkup()}
                              ></div>
                            </div>

                            <ProjectList projectList={this.state.projectList} />

                            <nav className="wt-pagination">{pagingContext}</nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // <!-- User Listing End--> */}
              </div>
            </div>
            {/* <!--Inner Home End-->
			            <!--Main Start--> */}
          </div>
          {/* </div> */}
          <Footer />
          {/* // <!--Footer End--> */}
        </div>
      );
    return <div ref={(el) => (this.instance = el)}>{mainContent}</div>;
  }
}

export default CompanySingle;
