/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import loadScripts1 from '../Functions/LoadScripts';
class Footer extends Component {
  componentDidMount() {
    loadScripts1(this.instance, false);
  }
  render() {
    return (
      <footer
        id="wt-footer"
        className="wt-footer wt-haslayout"
        ref={(el) => (this.instance = el)}
      >
        <div className="wt-footerholder wt-haslayout">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="wt-footerlogohold">
                  <strong className="wt-logo">
                    <a href="index.html">
                      <img src="/images/flogo.png" alt="company logo here" />
                    </a>
                  </strong>
                  <div className="wt-description">
                    <p>
                      Dotem eiusmod tempor incune utnaem labore etdolore maigna
                      aliqua enim poskina ilukita ylokem lokateise ination
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur lokaim urianewce{' '}
                      <a href="javascript.html">more...</a>
                    </p>
                  </div>
                  <ul className="wt-socialiconssimple wt-socialiconfooter">
                    <li className="wt-facebook">
                      <a href="javascript.html">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="wt-twitter">
                      <a href="javascript.html">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="wt-youtube">
                      <a href="javascript.html">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li className="wt-instagram">
                      <a href="javascript.html">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="wt-googleplus">
                      <a href="javascript.html">
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
                      <a href="/About">About Us</a>
                    </li>
                    <li>
                      <a href="/HowItWorks">How It Works</a>
                    </li>
                    <li>
                      <a href="/">Careers</a>
                    </li>
                    <li>
                      <a href="/">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="j/">Trust &amp; Safety</a>
                    </li>
                    <li className="wt-viewmore">
                      <a href="/">+ View All</a>
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
                      <Link to="/UserListing?location=United States">
                        Freelancers in USA
                      </Link>
                    </li>
                    <li>
                      <Link to="/UserListing?location=Canada">
                        Freelancers in Canada
                      </Link>
                    </li>
                    <li>
                      <Link to="/UserListing?location=Australia">
                        Freelancers in Australia
                      </Link>
                    </li>
                    <li>
                      <Link to="/JobListing?location=United States">
                        Jobs in USA
                      </Link>
                    </li>
                    <li>
                      <Link to="/JobListing">Find Jobs</Link>
                    </li>
                    <li className="wt-viewmore">
                      <a href="javascript.html">+ View All</a>
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
                    <a href="javascript.html">New @ Worktern?</a> Dotem eiusmod
                    tempor incune utnaem labore etdolore.
                  </span>
                </div>
                <div className="wt-fbtnarea">
                  <a href="java.html" className="wt-btn">
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
                      <a href="javascript.html">News</a>
                    </li>
                    <li>
                      <a href="javascript.html">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="javascript.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript.html">Career</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
