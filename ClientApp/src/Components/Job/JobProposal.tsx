import React from 'react';
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
import Header from '../Header/Header';

const JobProposal: React.FC = () => {
  return (
    <div>
      {/* !doctype html>
<!--[if lt IE 7]>		<html className="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>			<html className="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>			<html className="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!-->	<html className="no-js" lang=""> <!--<![endif]--> */}
      <head>
        {/* <meta charset="utf-8"> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>BootStrap HTML5 CSS3 Theme</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      </head>
      <body className="wt-login">
        {/* <!--[if lt IE 8]>
		<p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
	<![endif]-->
	<!-- Preloader Start -->
	<div className="preloader-outer">
		<div className="loader"></div>
	</div>
	<!-- Preloader End -->
	<!--Wrapper Start--> */}
        <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
          {/* <!--Content Wrapper Start--> */}
          <div className="wt-contentwrapper">
            {/* <!--Header Start--> */}
            <Header />

            {/* <!--Header End-->
			<!--Inner Home Banner Start--> */}
            <div className="wt-haslayout wt-innerbannerholder">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                    <div className="wt-innerbannercontent">
                      <div className="wt-title">
                        <h2>Job Proposal</h2>
                      </div>
                      <ol className="wt-breadcrumb">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="1.html;">Jobs</a>
                        </li>
                        <li>
                          <a href="1.html;">Job Detail</a>
                        </li>
                        <li className="wt-active">Job Proposal</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Inner Home End-->
			<!--Main Start--> */}
            <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
              <div className="wt-haslayout wt-main-section">
                {/* <!-- User Listing Start--> */}
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 push-lg-2">
                      <div className="wt-jobalertsholder">
                        <ul className="wt-jobalerts">
                          <li className="alert alert-warning alert-dismissible fade show">
                            <span>
                              <em>Alert:</em> You’ve consumed all you points to
                              apply new job,
                            </span>
                            <a href="1.html" className="wt-alertbtn warning">
                              Buy Now
                            </a>
                            <a
                              href="1.html"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            >
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                          <li className="alert alert-primary alert-dismissible fade show">
                            <span>
                              <em>info: </em> You’ve no skills of “PHP” but
                              still you can apply for this job.
                            </span>
                            <a href="1.html" className="wt-alertbtn primary">
                              View
                            </a>
                            <a
                              href="1.html"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            >
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                          <li className="alert alert-danger alert-dismissible fade show">
                            <span>
                              <em>You’re Late:</em> We’re sorry but the job you
                              want to apply is no longer available You’re Late:
                              for public/freelancers anymore.
                            </span>
                            <a href="1.html" className="wt-alertbtn danger">
                              Got It
                            </a>
                            <a
                              href="1.html"
                              className="close"
                              data-dismiss="alert"
                              aria-label="Close"
                            >
                              <i className="fa fa-close"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="wt-proposalholder">
                        <span className="wt-featuredtag">
                          <img
                            src="/images/featured.png"
                            alt="img description"
                            data-tipso="Plus Member"
                            className="template-content tipso_style"
                          />
                        </span>
                        <div className="wt-proposalhead">
                          <h2>
                            Webpage Takes Many Seconds to Load, I Want to Reduce
                            it{' '}
                          </h2>
                          <ul className="wt-userlisting-breadcrumb wt-userlisting-breadcrumbvtwo">
                            <li>
                              <span>
                                <i className="fa fa-dollar-sign"></i>
                                <i className="fa fa-dollar-sign"></i>
                                <i className="fa fa-dollar-sign"></i>{' '}
                                Professional
                              </span>
                            </li>
                            <li>
                              <span>
                                <img
                                  src="/images/flag/img-02.png"
                                  alt="img description"
                                />{' '}
                                United States
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="far fa-folder"></i> Type: Fixed
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="far fa-clock"></i> Duration: 15
                                Days
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="wt-proposalamount-holder">
                        <div className="wt-title">
                          <h2>Proposal Amount</h2>
                        </div>
                        <div className="wt-proposalamount accordion">
                          <div className="form-group">
                            <span>
                              ( <i className="fa fa-dollar-sign"></i> )
                            </span>
                            <input
                              type="number"
                              name="amount"
                              className="form-control"
                              placeholder="Enter Your Proposal Amount"
                            />
                            <a
                              href="1.html;"
                              className="collapsed"
                              id="headingOne"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <i className="lnr lnr-chevron-up"></i>
                            </a>
                            <em>
                              Total amount the client will see on your proposal
                            </em>
                          </div>
                          <ul
                            className="wt-totalamount collapse show"
                            id="collapseOne"
                            aria-labelledby="headingOne"
                          >
                            <li>
                              <h3>
                                ( <i className="fa fa-dollar-sign"></i> ){' '}
                                <em>- 00.00</em>
                              </h3>
                              <span>
                                <strong>“ Worktern ”</strong> Service Fee
                                <i
                                  className="fa fa-exclamation-circle template-content tipso_style"
                                  data-tipso="Plus Member"
                                ></i>
                              </span>
                            </li>
                            <li>
                              <h3>
                                ( <i className="fa fa-dollar-sign"></i> ){' '}
                                <em>- 00.00</em>
                              </h3>
                              <span>
                                Amount You’ll Recive after{' '}
                                <strong>“ Worktern ”</strong> Service Fee
                                deduction
                                <i
                                  className="fa fa-exclamation-circle template-content tipso_style"
                                  data-tipso="Plus Member"
                                ></i>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <form className="wt-formtheme wt-formproposal">
                          <fieldset>
                            <div className="form-group">
                              <span className="wt-select">
                                <select>
                                  <option value="1">
                                    I Can Finish This Project In: 01 Months
                                  </option>
                                  <option value="2">
                                    I Can Finish This Project In: 02 Months
                                  </option>
                                  <option value="3">
                                    I Can Finish This Project In: 03 Months
                                  </option>
                                  <option value="4">
                                    I Can Finish This Project In: 04 Months
                                  </option>
                                </select>
                              </span>
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                placeholder="Add Description*"
                              ></textarea>
                            </div>
                          </fieldset>
                          <fieldset>
                            <div className="wt-attachments wt-attachmentsvtwo">
                              <div className="wt-title">
                                <h3>Upload File (Optional)</h3>
                                <label htmlFor="afile">
                                  <span>
                                    <i className="lnr lnr-link"></i> Attach
                                    File(s)
                                  </span>
                                  <input type="file" name="file" id="afile" />
                                </label>
                              </div>
                              <ul className="wt-attachfile">
                                <li className="wt-uploading">
                                  <span>Logo.jpg</span>
                                  <em>
                                    File size: 300 kb
                                    {/* <a
                                      href="tq.html"
                                      className="lnr lnr-trash"
                                    ></a> */}
                                  </em>
                                </li>
                                <li>
                                  <span>Wireframe Document.doc</span>
                                  <em>
                                    File size: 512 kb
                                    {/* <a
                                      href="javascript.html"
                                      className="lnr lnr-trash"
                                    ></a> */}
                                  </em>
                                </li>
                                <li>
                                  <span>Requirments.pdf</span>
                                  <em>
                                    File size: 110 kb
                                    {/* <a
                                      href="javascript.html"
                                      className="lnr lnr-trash"
                                    ></a> */}
                                  </em>
                                </li>
                                <li>
                                  <span>Company Intro.docx</span>
                                  <em>
                                    File size: 224 kb
                                    {/* <a
                                      href="javascript.html"
                                      className="lnr lnr-trash"
                                    ></a> */}
                                  </em>
                                </li>
                              </ul>
                              <div className="wt-btnarea">
                                <a href="1.html" className="wt-btn">
                                  Send Now
                                </a>
                              </div>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- User Listing End--> */}
              </div>
            </main>
            {/* <!--Main End-->
			<!--Footer Start--> */}
            <footer id="wt-footer" className="wt-footer wt-haslayout">
              <div className="wt-footerholder wt-haslayout">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <div className="wt-footerlogohold">
                        <strong className="wt-logo">
                          <a href="index.html">
                            <img
                              src="/images/flogo.png"
                              alt="company logo here"
                            />
                          </a>
                        </strong>
                        <div className="wt-description">
                          <p>
                            Dotem eiusmod tempor incune utnaem labore etdolore
                            maigna aliqua enim poskina ilukita ylokem lokateise
                            ination voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur lokaim urianewce{' '}
                            <a href="1.html;">more...</a>
                          </p>
                        </div>
                        <ul className="wt-socialiconssimple wt-socialiconfooter">
                          <li className="wt-facebook">
                            <a href="1.html;">
                              <i className="fa fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="wt-twitter">
                            <a href="1.html;">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="wt-youtube">
                            <a href="1.html;">
                              <i className="fab fa-youtube"></i>
                            </a>
                          </li>
                          <li className="wt-instagram">
                            <a href="1.html;">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="wt-googleplus">
                            <a href="1.html;">
                              <i className="fab fa-google-plus-g"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="wt-footercol wt-widgetcompany">
                        <div className="wt-fwidgettitle">
                          <h3>Company</h3>
                        </div>
                        <ul className="wt-fwidgetcontent">
                          <li>
                            <a href="1.html;">About Us</a>
                          </li>
                          <li>
                            <a href="1.html;">How It Works</a>
                          </li>
                          <li>
                            <a href="1.html;">Careers</a>
                          </li>
                          <li>
                            <a href="1.html;">Terms &amp; Conditions</a>
                          </li>
                          <li>
                            <a href="1.html;">Trust &amp; Safety</a>
                          </li>
                          <li className="wt-viewmore">
                            <a href="1.html;">+ View All</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                      <div className="wt-footercol wt-widgetexplore">
                        <div className="wt-fwidgettitle">
                          <h3>Explore More</h3>
                        </div>
                        <ul className="wt-fwidgetcontent">
                          <li>
                            <a href="1.html;">Freelancers in USA</a>
                          </li>
                          <li>
                            <a href="1.html;">Freelancers in Canada</a>
                          </li>
                          <li>
                            <a href="1.html;">Freelancers in Australia</a>
                          </li>
                          <li>
                            <a href="1.html;">Jobs in USA</a>
                          </li>
                          <li>
                            <a href="1.html;">Find Jobs</a>
                          </li>
                          <li className="wt-viewmore">
                            <a href="1.html;">+ View All</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wt-haslayout wt-joininfo">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 push-lg-1">
                      <div className="wt-companyinfo">
                        <span>
                          <a href="1.html;">New @ Worktern?</a> Dotem eiusmod
                          tempor incune utnaem labore etdolore.
                        </span>
                      </div>
                      <div className="wt-fbtnarea">
                        <a href="1.html" className="wt-btn">
                          Join Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wt-haslayout wt-footerbottom">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <p className="wt-copyrights">
                        <span>Worktern.</span> © 2018 All Rights Reserved.
                      </p>
                      <nav className="wt-addnav">
                        <ul>
                          <li>
                            <a href="1.html;">News</a>
                          </li>
                          <li>
                            <a href="1.html;">Terms &amp; Conditions</a>
                          </li>
                          <li>
                            <a href="1.html;">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="1.html;">Career</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            {/* <!--Footer End--> */}
          </div>
          {/* <!--Content Wrapper End--> */}
        </div>
        {/* <!--Wrapper End--> */}
        {/* <script src="js/vendor/jquery-3.3.1.js"></script>
        <script src="js/vendor/jquery-library.js"></script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/chosen.jquery.js"></script>
        <script src="js/tilt.jquery.js"></script>
        <script src="js/scrollbar.min.js"></script>
        <script src="js/prettyPhoto.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/readmore.js"></script>
        <script src="js/countTo.js"></script>
        <script src="js/appear.js"></script>
        <script src="js/tipso.js"></script>
        <script src="js/jRate.js"></script>
        <script src="js/main.js"></script> */}
      </body>
    </div>
  );
};
export default JobProposal;
