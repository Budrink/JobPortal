import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { Container } from 'reactstrap';
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
import LoginForm from '../Auth/LoginForm';
import SideBar from './SideBar';
import { RefreshLoginFetch } from '../PostData/Login';
import loadScripts1 from '../Functions/LoadScripts';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: true,
    };

    this.Login = this.Login.bind(this);
    this.Logout = this.Logout.bind(this);
  }
  Login() {
    this.setState({ loginVisible: false });
    this.setState({ loginVisible: false });
  }
  Logout() {
    this.setState({ loginVisible: true });
    this.props.Logout();
  }
  componentDidMount() {
    // loadScripts1(this.instance, false);
    ///check refreshToken!!!!
    if (localStorage.getItem('login') === 'true') {
      this.setState({ loginVisible: false });
    } else {
      RefreshLoginFetch();
      if (localStorage.getItem('login') === 'true') {
        this.setState({ loginVisible: false });
      } else {
        this.setState({ loginVisible: true });
      }
    }
  }
  createSideContext() {
    if (this.state.loginVisible) {
      return (
        <div className="wt-loginarea">
          <figure className="wt-userimg">
            <img src="/images/user-login.png" alt="img description" />
          </figure>
          <div className="wt-loginoption">
            <a to="#" id="wt-loginbtn" className="wt-loginbtn">
              Login
            </a>
            <LoginForm LoginSuccessfull={this.Login} />
          </div>
          <Link className="wt-btn" to="/Register">
            Join Now
          </Link>
        </div>
      );
    } else {
      if (this.state.typeOfUser === 'company')
        return (
          <SideBar
            typeOfUser="company"
            Logout={this.props.Logout}
            userId={localStorage.getItem('userId')}
          />
        );
      else
        return (
          <SideBar
            typeOfUser="freelancer"
            Logout={this.Logout}
            userId={localStorage.getItem('userId')}
          />
        );
    }
  }
  render(sideCondext = this.createSideContext()) {
    return (
      <div
        className="wt-header wt-haslayout"
        id="wt-header"
        ref={(el) => (this.instance = el)}
      >
        <div className="wt-navigationarea">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className="wt-logo">
                  <Link to="/">
                    <img alt="company logo here" src="/images/logo.png" />
                  </Link>
                </strong>
                <div className="wt-rightarea">
                  <nav className="wt-nav navbar-expand-lg" id="wt-nav">
                    <button
                      className="navbar-toggler"
                      aria-expanded="false"
                      aria-controls="navbarNav"
                      aria-label="Toggle navigation"
                      type="button"
                      data-target="#navbarNav"
                      data-toggle="collapse"
                    >
                      <i className="lnr lnr-menu" />
                    </button>
                    <div
                      className="collapse navbar-collapse wt-navigation"
                      id="navbarNav"
                    >
                      <ul className="navbar-nav">
                        <li className="menu-item-has-children page_item_has_children">
                          <Link to="/">Main</Link>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children page_item_has_children wt-notificationicon">
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right" />
                              </span>
                              <Link to="/">Home</Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/">Home v1</Link>
                                </li>
                                <li className="wt-newnoti">
                                  <Link to="/homev2">
                                    Home v2<em>without login</em>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right" />
                              </span>
                              <Link to="/">Article</Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/ArticleList">Article List</Link>
                                </li>
                                <li>
                                  <Link to="ArticleGrid">Article Grid</Link>
                                </li>
                                {/* <li>
                                  <Link to="/ArticleSingle">
                                    Article Single
                                  </Link>
                                </li> */}
                                <li>
                                  <Link to="/ArticleClassic">
                                    Article Classic
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children page_item_has_children">
                              <span className="wt-dropdowarrow">
                                <i className="lnr lnr-chevron-right" />
                              </span>
                              <a>Company</a>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="/CompanyGrid">Company Grid</Link>
                                </li>
                                {/* <li>
                                  <Link to="/CompanySigle">Company Sigle</Link>
                                </li> */}
                              </ul>
                            </li>
                            <li>
                              <Link to="/About">About</Link>
                            </li>
                            <li>
                              <Link to="/Privacypolicy">Privacy Policy</Link>
                            </li>
                            <li>
                              <Link to="/Comingsoon">Coming Soon</Link>
                            </li>
                            <li>
                              <Link to="/404page">404page</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <Link to="/HowItWorks">How It Works</Link>
                        </li>
                        <li className="menu-item-has-children page_item_has_children">
                          <Link to="/">Browse Jobs</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/JobListing">Job Listing</Link>
                            </li>
                            {/* <li className="current-menu-item">
                              <Link to="/JobSingle">Job Single</Link>
                            </li> */}
                            {/* <li>
                              <Link to="/JobProposal">Job Proposal</Link>
                            </li> */}
                          </ul>
                        </li>
                        <li className="menu-item-has-children page_item_has_children">
                          <a>View Freelancers</a>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/UserListing">User Listing</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  {sideCondext}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
