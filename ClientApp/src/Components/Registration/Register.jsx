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
import Header1 from '../Header/Header1';
import loadScripts1 from '../Functions/LoadScripts';
import RegisterForm from './RegisterForm';

//* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.onRegister = this.onRegister.bind(this);
    this.Logout = this.Logout.bind(this);
  }
  componentDidMount() {
    console.log('register1');
    loadScripts1(document.body);
  }
  Logout() {
    // console.log('Logout 2');
    this.props.history.push('/Home');
  }

  onRegister() {
    this.props.history.push('/Register2');
    // this.setState({ page: 1 });
    // console.log(this.state.page);
  }

  render() {
    return (
      <div
        className="wt-wrapper wt-haslayout"
        id="wt-wrapper"
        //      ref={(el) => (this.instance = el)}
      >
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
                      <h2>Join Now For FREE</h2>
                    </div>
                    <ol className="wt-breadcrumb">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="wt-active">Join Now</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Inner Home End*/}
          {/*Main Start*/}
          <main className="wt-main wt-haslayout wt-innerbgcolor" id="wt-main">
            {/*Register Form Start*/}
            <div className="wt-haslayout wt-main-section">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-10 push-md-1 col-lg-8 push-lg-2">
                    <div className="wt-registerformhold">
                      <div className="wt-registerformmain">
                        <div className="wt-registerhead">
                          <div className="wt-title">
                            <h3>Join For a Good Start</h3>
                          </div>
                          <div className="wt-description">
                            <p>
                              Consectetur adipisicing elit sed dotem eiusmod
                              tempor incune utnaem labore etdolore maigna aliqua
                              enim poskina
                            </p>
                          </div>
                        </div>
                        <div className="wt-joinforms">
                          <ul className="wt-joinsteps">
                            <li className="wt-active">
                              <a href="/Register">01</a>
                            </li>
                            <li>
                              <a>02</a>
                            </li>
                            <li>
                              <a>03</a>
                            </li>
                            <li>
                              <a>04</a>
                            </li>
                          </ul>
                          <RegisterForm onRegister={this.onRegister} />
                          <div className="wt-joinnowholder">
                            <div className="wt-title">
                              <h4>Join Now With</h4>
                            </div>
                            <div className="wt-description">
                              <p>
                                Use a social account for faster login or easy
                                registration to directly get in to your account
                                and start a good business
                              </p>
                            </div>
                            <ul className="wt-socialicons wt-iconwithtext">
                              <li className="wt-facebook">
                                <a href="/">
                                  <i className="fa fa-facebook-f" />
                                  <em>Facebook</em>
                                </a>
                              </li>
                              <li className="wt-twitter">
                                <a href="/">
                                  <i className="fab fa-twitter" />
                                  <em>Twitter</em>
                                </a>
                              </li>
                              <li className="wt-googleplus">
                                <a href="/">
                                  <i className="fab fa-google-plus-g" />
                                  <em>Google</em>
                                </a>
                              </li>
                              <li className="wt-instagram">
                                <a href="/">
                                  <i className="fab fa-instagram" />
                                  <em>Instagram</em>
                                </a>
                              </li>
                            </ul>
                          </div>
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
            {/*Register Form End*/}
          </main>
          {/*Main End*/}
          {/*Footer Start*/}
          <Footer />
          {/*Footer End*/}
        </div>
        {/*Content Wrapper End*/}
      </div>
    );
  }
}
