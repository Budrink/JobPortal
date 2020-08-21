/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/font-awesome.min.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/linearicons.css';
import '../../../css/jquery-ui.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/display.css';
import loadScripts1 from '../../Functions/LoadScripts';
import Header1 from '../../Header/Header1';
import { GetFreelancerAccountSettings } from '../../GetData/GetFreelancerAccountSettings';
import DeleteAccountForm from './DeleteAccountForm';
import LanguageList from '../LanguageList';
import CurrencyList from '../CurrencyList';
import { PostAccountSettings } from '../../PostData/PostAccountSettings';

class DashboardAccountSettigns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      email: '',
      userName: '',
      password: '',
      accountSettings: {
        publicProfile: false,
        sharePhoto: false,
        showFeedback: false,
        profileSearchible: false,
        disableAccount: false,
        disableTemporarily: false,
        language: undefined,
        currency: undefined,
        sendWeeklyAlerts: false,
        sendBonusAlearts: false,
        forwardMessages: false,
        shareSecurityAlerts: false,
        detailPageDesign: false,
        newPassowrd: false,
      },
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.LoginSuccessfull = this.LoginSuccessfull.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  Logout() {
    this.props.history.push('/');
  }

  LoginSuccessfull() {
    this.props.history.push('/');
  }
  iD = this.props.match.params.userId;
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    const name = input.name;
    this.setState((prevState) => ({
      ...prevState,
      accountSettings: {
        ...prevState.accountSettings,
        [name]: value,
      },
    }));
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.state.freelancer);
    PostAccountSettings(this.state.accountSettings);
    // let result = await SendPassword();
    // this.setState({ errors: [''] });
    // this.setState({ message: result.messages });
    // this.setState({ showError: true });
  };

  populateData = async (iD) => {
    const data = await GetFreelancerAccountSettings(iD, 1, 0);
    this.setState({ accountSettings: data.accountSettings }, () => {});
    this.setState({ iD: data.iD });
    this.setState({ email: data.email });
    this.setState({ userName: data.userName });
    this.setState({ password: data.password });
    this.setState({ loading: false }, () => {});
    // this.setState({ language: data.language }, () => {});
    // this.setState({ currency: data.currency }, () => {});
    loadScripts1(this.instance, false);
  };
  async componentDidMount() {
    await this.populateData();
  }

  createMainContext() {
    if (this.state.loading === true) {
      return (
        <div>
          <em>Loading...</em>
        </div>
      );
    } else {
      return (
        <div ref={(el) => (this.instance = el)}>
          <div ref={(el) => (this.instance = el)}></div>; /* Wrapper Start */}
          <title>Dashboard Account Settings</title>
          <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
            {/* Content Wrapper Start */}
            <div className="wt-contentwrapper">
              {/* Header Start */}
              <Header1 Login={this.LoginSuccessfull} Logout={this.Logout} />
              {/*Header End*/}
              {/*Main Start*/}
              <main className="wt-main wt-haslayout" id="wt-main">
                {/*Register Form Start*/}
                <section className="wt-haslayout wt-dbsectionspace">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
                      <div className="wt-dashboardbox wt-dashboardtabsholder wt-accountsettingholder">
                        <div className="wt-dashboardtabs">
                          <ul className="wt-tabstitle nav navbar-nav">
                            <li className="nav-item">
                              <a
                                className="active"
                                href="#wt-security"
                                data-toggle="tab"
                              >
                                Security &amp; Settings
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#wt-password" data-toggle="tab">
                                Password
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#wt-emailnoti" data-toggle="tab">
                                Email Notifications
                              </a>
                            </li>

                            <li className="nav-item">
                              <a href="#wt-deleteaccount" data-toggle="tab">
                                Delete Account
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="wt-tabscontent tab-content">
                          <div
                            className="wt-securityhold tab-pane active fade show"
                            id="wt-security"
                          >
                            <div className="wt-securitysettings wt-tabsinfo">
                              <div className="wt-tabscontenttitle">
                                <h2>Account Security &amp; Settings</h2>
                              </div>
                              <div className="wt-settingscontent">
                                <div className="wt-description">
                                  <p>
                                    Consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua aut enim ad minim veniamac quis
                                    nostrud exercitation ullamco laboris.
                                  </p>
                                </div>
                                <ul className="wt-accountinfo">
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="publicProfile"
                                        checked={
                                          this.state.accountSettings
                                            .publicProfile
                                        }
                                        id="hide-on"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                      />
                                      <label htmlFor="hide-on">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Make my profile public</span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="profileSearchible"
                                        id="hide-onone"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .profileSearchible
                                        }
                                      />
                                      <label htmlFor="hide-onone">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Make my profile searchable</span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="sharePhoto"
                                        id="hide-onthree"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings.sharePhoto
                                        }
                                      />
                                      <label htmlFor="hide-onthree">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Share my profile photo</span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="disableTemporarily"
                                        id="hide-onfour"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .disableTemporarily
                                        }
                                      />
                                      <label htmlFor="hide-onfour">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Disable my account temporarily</span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="showFeedback"
                                        id="hide-onfive"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .showFeedback
                                        }
                                      />
                                      <label htmlFor="hide-onfive">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Show my client feedback</span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="disableAccount"
                                        id="hide-onsix"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .disableAccount
                                        }
                                      />
                                      <label htmlFor="hide-onsix">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Enable/ Disable</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="wt-location wt-tabsinfo">
                              <div className="wt-tabscontenttitle">
                                <h2>Language &amp; Currency</h2>
                              </div>
                              <form className="wt-formtheme wt-userform">
                                <fieldset>
                                  <LanguageList
                                    initialValue={
                                      this.state.accountSettings.language
                                    }
                                    handleChange={this.handleChange}
                                  />
                                  <CurrencyList
                                    initialValue={
                                      this.state.accountSettings.currency
                                    }
                                    handleChange={this.handleChange}
                                  />
                                </fieldset>
                              </form>
                            </div>
                            <div className="wt-tabcompanyinfo">
                              <div className="wt-tabscontenttitle">
                                <h2>Dashboard Color Settings</h2>
                              </div>
                              <div className="wt-settingscontent">
                                <div className="wt-description">
                                  <p>
                                    Incididunt ut labore et dolore magna aliqua
                                    aut enim ad exercitation ullamco laboris.
                                  </p>
                                </div>
                                <ul className="wt-accountinfo">
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="contact_form"
                                        id="hide-on1"
                                        type="checkbox"
                                      />
                                      <label htmlFor="hide-on1">
                                        <i />
                                      </label>
                                    </div>
                                    <span>
                                      Use dark version for my dashboard
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div
                            className="wt-passwordholder tab-pane fade"
                            id="wt-password"
                          >
                            <div className="wt-changepassword">
                              <div className="wt-tabscontenttitle">
                                <h2>Change Your Password</h2>
                              </div>
                              <form className="wt-formtheme wt-userform">
                                <fieldset>
                                  <div className="form-group form-group-half">
                                    <input
                                      name="password"
                                      className="form-control"
                                      type="password"
                                      // value={
                                      //   this.state.freelancerAccountSettings
                                      //     .password
                                      // }
                                      onChange={this.handleChange}
                                      placeholder="Last Remember Password"
                                    />
                                  </div>
                                  <div className="form-group form-group-half">
                                    <input
                                      name="newPassword"
                                      className="form-control"
                                      type="password"
                                      placeholder="New Password"
                                      onChange={this.handleChange}
                                      // value={
                                      //   this.state.freelancerAccountSettings
                                      //     .newPassword
                                      // }
                                    />
                                  </div>
                                  <div className="form-group">
                                    <span className="wt-checkbox">
                                      <input
                                        name="termsconditions"
                                        id="termsconditions"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        // checked= { this.state.accountSettings
                                        // .disableAccount}
                                      />
                                      <label htmlFor="termsconditions">
                                        <span>
                                          Logout from all other web/mobile
                                          session now.
                                        </span>
                                      </label>
                                    </span>
                                  </div>
                                </fieldset>
                              </form>
                            </div>
                          </div>
                          <div
                            className="wt-emailnotiholder tab-pane fade"
                            id="wt-emailnoti"
                          >
                            <div className="wt-emailnoti">
                              <div className="wt-tabscontenttitle">
                                <h2>Manage Email Notifications</h2>
                              </div>
                              <div className="wt-settingscontent">
                                <div className="wt-description">
                                  <p>
                                    Consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna
                                    aliqua aut enim ad minim veniamac quis
                                    nostrud exercitation ullamco laboris.
                                  </p>
                                </div>
                                <form className="wt-formtheme wt-userform">
                                  <fieldset>
                                    <div className="form-group form-disabeld">
                                      <input
                                        name="email"
                                        disabled
                                        className="form-control"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        placeholder="your email here"
                                      />
                                    </div>
                                  </fieldset>
                                </form>
                                <ul className="wt-accountinfo">
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="sendWeeklyAlerts"
                                        id="hide-onemail"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .sendWeeklyAlerts
                                        }
                                      />
                                      <label htmlFor="hide-onemail">
                                        <i />
                                      </label>
                                    </div>
                                    <span>
                                      Send me Weekly newsletter alerts
                                    </span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="sendBonusAlerts"
                                        id="hide-onemail1"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        // checked={
                                        //   this.state.accountSettings
                                        //     .sendBonusAlerts
                                        // }
                                      />
                                      <label htmlFor="hide-onemail1">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Forward messages on this ID</span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="forwardMessages"
                                        id="hide-onemail2"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .forwardMessages
                                        }
                                      />
                                      <label htmlFor="hide-onemail2">
                                        <i />
                                      </label>
                                    </div>
                                    <span>
                                      Send me bonus &amp; promo alerts
                                    </span>
                                  </li>
                                  <li>
                                    <div className="wt-on-off">
                                      <input
                                        name="shareSecurityAlerts"
                                        id="hide-onemail3"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={
                                          this.state.accountSettings
                                            .shareSecurityAlerts
                                        }
                                      />
                                      <label htmlFor="hide-onemail3">
                                        <i />
                                      </label>
                                    </div>
                                    <span>Share latest security alerts</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div
                            className="wt-accountholder tab-pane fade"
                            id="wt-deleteaccount"
                          >
                            <div className="wt-accountdel">
                              <div className="wt-tabscontenttitle">
                                <h2>Delete Account</h2>
                              </div>
                              <DeleteAccountForm
                                iD={this.state.accountSettings.userId}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="wt-updatall">
                        <i className="ti-announcement" />
                        <span>
                          Update all the latest changes made by you, by just
                          clicking on “Save &amp; Continue” button.
                        </span>
                        <button className="wt-btn" onClick={this.handleSubmit}>
                          Save &amp; Continue
                        </button>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3" />
                  </div>
                </section>
                {/*Register Form End*/}
              </main>
              {/*Main End*/}
            </div>
            {/*Content Wrapper End*/}
          </div>
          {/*Wrapper End*/}
        </div>
      );
    }
  }

  render(contextMain = this.createMainContext()) {
    return <div ref={(el) => (this.instance = el)}>{contextMain}</div>;
  }
}
export default DashboardAccountSettigns;
