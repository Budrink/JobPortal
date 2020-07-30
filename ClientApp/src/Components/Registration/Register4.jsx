/** @jsx jsx */ import { jsx } from '@emotion/core';
import { Component } from 'react';
import '../../css/bootstrap.min.css';
import '../../css/normalize.css';
import '../../css/scrollbar.css';
import '../../css/fontawesome/fontawesome-all.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.min.css';
import '../../css/font-awesome.min.css';
import '../../css/linearicons.css';
import '../../css/jquery-ui.css';
import '../../css/tipso.css';
import '../../css/chosen.css';
import '../../css/prettyPhoto.css';
import '../../css/main.css';
import '../../css/color.css';
import '../../css/transitions.css';
import '../../css/responsive.css';
import '../../css/transitions.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header1';
import loadScripts1 from '../Functions/LoadScripts';

//* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */

export default class Register3 extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
  }
  componentDidMount() {
    loadScripts1(this.instance, false);
  }
  Logout() {
    this.props.history.push('/Home');
  }

  render() {
    return (
      <div
        className="wt-wrapper wt-haslayout"
        id="wt-wrapper"
        ref={(el) => (this.instance = el)}
      >
        {/* Content Wrapper Start */}
        <div className="wt-contentwrapper">
          {/* Header Start */}
          <Header Logout={this.Logout} />
          <div id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
            {/* <!--Register Form Start--> */}
            <div className="wt-haslayout wt-main-section">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-8 push-lg-2">
                    <div className="wt-registerformhold">
                      <div className="wt-registerformmain">
                        <div className="wt-registerhead">
                          <div className="wt-title">
                            <h3>Congratulations!</h3>
                          </div>
                          <div className="description">
                            <p>
                              Consectetur adipisicing elit sed dotem eiusmod
                              tempor incune utnaem labore etdolore maigna aliqua
                              enim poskina
                            </p>
                          </div>
                        </div>
                        <div className="wt-joinforms">
                          <ul className="wt-joinsteps">
                            <li className="wt-done-next">
                              <a href="/Register">
                                <i className="fa fa-check"></i>
                              </a>
                            </li>
                            <li className="wt-done-next">
                              <a href="/Register2">
                                <i className="fa fa-check"></i>
                              </a>
                            </li>
                            <li className="wt-done-next">
                              <a href="/Register3">
                                <i className="fa fa-check"></i>
                              </a>
                            </li>
                            <li className="wt-done-next">
                              <a href="/Register4">
                                <i className="fa fa-check"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="wt-gotodashboard">
                          <span>
                            Would you like to add your team?
                            <a href="/"> Start Adding Now</a>
                          </span>
                          <a href="dashboard-insights.html" className="wt-btn">
                            Goto Dashboard
                          </a>
                        </div>
                      </div>
                      <div className="wt-registerformfooter">
                        <span>
                          Already Have an Account?
                          <a href="/Login">Login Now</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Register Form End--> */}
          </div>

          {/*Footer Start*/}
          <Footer />
          {/*Footer End*/}
        </div>
        {/*Content Wrapper End*/}
      </div>
    );
  }
}
