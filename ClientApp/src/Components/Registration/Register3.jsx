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
import { ValidateCode } from '../PostData/Register_old';

//* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */

export default class Register3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.Logout = this.Logout.bind(this);
  }
  componentDidMount() {
    //loadScripts1(this.instance, false);
    loadScripts1(document.body);
  }
  Logout() {
    this.props.history.push('/Home');
  }

  onChangeInput(event) {
    if (event === undefined) return;
    const value = event.target.value;
    this.setState({ code: value }, () => {});
  }

  async onSubmit(event) {
    event.preventDefault();

    let response = await ValidateCode(this.state.code);

    if (response.result === true) {
      // alert('norm');
      // console.log(this.props.location);
      // console.log(this.props.browserHistory);
      // console.log(JSON.stringify(this.props));
      // this.props.history.push('/home');
      //  this.context.browserRouter.history.push('/genre/');
      // this.setState({ formVaidatedByServer: true });

      this.props.history.push('/Register4');
      // this.setState({ page: 1 });
      // console.log(this.state.page);
    }
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
                            <h3>You're Almost There</h3>
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
                            <li className="wt-done-next">
                              <a>
                                <i className="fa fa-check"></i>
                              </a>
                            </li>
                            <li className="wt-done-next">
                              <a>
                                <i className="fa fa-check"></i>
                              </a>
                            </li>
                            <li className="wt-active">
                              <a href="/Register3">03</a>
                            </li>
                            <li>
                              <a>04</a>
                            </li>
                          </ul>
                        </div>
                        <div className="wt-joinformc">
                          <figure className="wt-joinformsimg">
                            <img
                              src="/images/work/img-04.jpg"
                              alt="img description"
                            />
                          </figure>
                          <form className="wt-formtheme wt-verifyform ">
                            <fieldset>
                              <div className="form-group">
                                <label>
                                  We’ve sent verification code on your email.
                                  <a href="//Register3">Why I need code?</a>
                                </label>
                                <input
                                  type="text"
                                  name="code"
                                  className="form-control"
                                  placeholder="Enter Verification Code"
                                  onChange={this.onChangeInput()}
                                />
                              </div>
                              <div className="form-group wt-btnarea">
                                <button
                                  onClick={this.Submit}
                                  className="wt-btn"
                                >
                                  Verify now
                                </button>
                              </div>
                            </fieldset>
                          </form>
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
