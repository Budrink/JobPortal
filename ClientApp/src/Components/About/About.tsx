import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';

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
import Footer from '../Footer/Footer';
const About: React.FC = () => {
  return (
    <div>
      <div className="wt-login">
        {/* <!--[if lt IE 8]></body>
            <p className="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- Preloader Start -->
        <div className="preloader-outer">
            <div className="loader"></div>
        </div>
        <!-- Preloader End --> */}
        {/* <!-- Wrapper Start --> */}
        <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
          {/* <!-- Content Wrapper Start --> */}
          <div className="wt-contentwrapper">
            {/* <!-- Header Start --> */}
            <Header />
            {/* <!--Header End-->
                <!--Inner Home Banner Start--> */}
            <div className="wt-haslayout wt-innerbannerholder">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                    <div className="wt-innerbannercontent">
                      <div className="wt-title">
                        <h2>A Brief Intro</h2>
                      </div>
                      <ol className="wt-breadcrumb">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li className="wt-active">About</li>
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
                {/* <!--Greetings & Welcome Start--> */}
                <section className="wt-haslayout">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="wt-greeting-holder">
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-7 float-left">
                              <div className="wt-greetingcontent">
                                <div className="wt-sectionhead">
                                  <div className="wt-sectiontitle">
                                    <h2>Greetings &amp; Welcome</h2>
                                    <span>Start Today For a Great Future</span>
                                  </div>
                                  <div className="wt-description">
                                    <p>
                                      Dotem eiusmod tempor incune utnaem labore
                                      etdolore maigna aliqua eniina ilukita
                                      ylokem lokateise ination voluptate velite
                                      esse cillum dolore eu fugnulla pariatur
                                      lokaim urianewce anim id est laborumed.
                                    </p>
                                    <p>
                                      Excepteur sint occaecat cupidatat non
                                      proident, sunt in culpa officia deserunt
                                      mollit anim id est laborumed perspiciatis
                                      unde omnis isteatus error aluptatem
                                      accusantium doloremque laudantium.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  id="wt-statistics"
                                  className="wt-statistics"
                                >
                                  <div className="wt-statisticcontent wt-countercolor1">
                                    <h3
                                      data-from="0"
                                      data-to="1500"
                                      data-speed="8000"
                                      data-refresh-interval="50"
                                    >
                                      1500
                                    </h3>
                                    <em>k</em>
                                    <h4>Active Projects</h4>
                                  </div>
                                  <div className="wt-statisticcontent wt-countercolor2">
                                    <h3
                                      data-from="0"
                                      data-to="99"
                                      data-speed="8000"
                                      data-refresh-interval="5.9"
                                    >
                                      99%
                                    </h3>
                                    <em>%</em>
                                    <h4>Great Feedback</h4>
                                  </div>
                                  <div className="wt-statisticcontent wt-countercolor3">
                                    <h3
                                      data-from="0"
                                      data-to="5000"
                                      data-speed="8000"
                                      data-refresh-interval="100"
                                    >
                                      5000
                                    </h3>
                                    <em>k</em>
                                    <h4>Active Freelancers</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-5 float-left">
                              <div className="wt-greetingvideo">
                                <figure>
                                  <a
                                    data-rel="prettyPhoto[video]"
                                    href="https://www.youtube.com/watch?v=J37W6DjqT3Q"
                                  >
                                    <img
                                      src="/images/video-img.png"
                                      alt="video"
                                    />
                                  </a>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!--Greetings & Welcome End-->
                        <!--Signup Start--> */}
                <section className="wt-haslayout">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="wt-signupholder">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6 pull-right">
                            <div className="wt-signupcontent">
                              <div className="wt-title">
                                <h2>
                                  <span>Signup as</span>Worktern Pro
                                </h2>
                              </div>
                              <div className="wt-description">
                                <p>
                                  Consectetur adipisicing elit amissed dotem
                                  eiusmod tempor incuntes utneai labore
                                  etdolore.
                                </p>
                              </div>
                              <div className="wt-btnarea">
                                <a href="1.html;" className="wt-btn wt-btnvtwo">
                                  Join Now
                                </a>
                                <a href="1.html;" className="wt-btn">
                                  What’s new
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!--Signup End-->
                        <!--Brand Start--> */}
                <div className="wt-haslayout">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div
                          id="wt-brandslider"
                          className="wt-barandslider wt-haslayout owl-carousel"
                        >
                          <figure className="item wt-brandimg">
                            <img
                              src="/images/brands/img-01.png"
                              alt="description"
                            />
                          </figure>
                          <figure className="item wt-brandimg">
                            <img
                              src="/images/brands/img-02.png"
                              alt=" description"
                            />
                          </figure>
                          <figure className="item wt-brandimg">
                            <img
                              src="/images/brands/img-03.png"
                              alt=" description"
                            />
                          </figure>
                          <figure className="item wt-brandimg">
                            <img
                              src="/images/brands/img-04.png"
                              alt=" description"
                            />
                          </figure>
                          <figure className="item wt-brandimg">
                            <img
                              src="/images/brands/img-05.png"
                              alt=" description"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--Brand End-->
                        <!--Our Team Start--> */}
                <section className="wt-haslayout">
                  <div className="container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="wt-ourteamhold wt-haslayout wt-bgwhite">
                          <div
                            id="filter-masonry"
                            className="wt-teamfilter wt-haslayout"
                          >
                            <div className="wt-sectionhead">
                              <div className="wt-sectiontitle">
                                <h2>Our Professionals</h2>
                                <span>Team Behind The Curtain</span>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-01.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Luisa Moxley</a>
                                  </h2>
                                  <span>Marketing Manager</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-02.jpg"
                                  alt=" description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Guadalupe</a>
                                  </h2>
                                  <span>Marketing Administrator</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-03.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Brande Feeley</a>
                                  </h2>
                                  <span>Marketing Director</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-04.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Joseph Farner</a>
                                  </h2>
                                  <span>VP Marketing</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-05.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Rozella Hott</a>
                                  </h2>
                                  <span>Marketing Director</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-06.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Duane Villalta</a>
                                  </h2>
                                  <span>Marketing Administrator</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-07.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Johanne Deyoung</a>
                                  </h2>
                                  <span>VP Marketing</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-teamholder">
                              <figure className="wt-speakerimg">
                                <img
                                  src="/images/team/img-08.jpg"
                                  alt="description"
                                />
                              </figure>
                              <div className="wt-teamcontent">
                                <div className="wt-title">
                                  <h2>
                                    <a href="1.html;">Joseph Farner</a>
                                  </h2>
                                  <span>Marketing Manager</span>
                                </div>
                                <ul className="wt-socialicons wt-socialiconssimple">
                                  <li className="wt-facebook">
                                    <a href="1.html;">
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                  <li className="wt-twitter">
                                    <a href="1.html;">
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                  <li className="wt-linkedin">
                                    <a href="1.html;">
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                  <li className="wt-googleplus">
                                    <a href="1.html;">
                                      <i className="fa fa-google-plus"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* <!--Our Team End--> */}
              </div>
            </main>
            {/* <!--Main End-->
                <!--Footer Start--> */}
            <Footer />
            {/* <!--Footer End--> */}
          </div>
          {/* <!--Content Wrapper End--> */}
        </div>
        {/* <!--Wrapper End--> */}
      </div>
    </div>
  );
};
export default About;
