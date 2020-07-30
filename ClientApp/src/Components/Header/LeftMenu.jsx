import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import loadScripts1 from '../Functions/LoadScripts';
export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false,
    };
  }
  typeOfUser = '';
  userId = '';
  company = '';
  userPhoto = '';
  userName = '';
  componentDidMount() {
    if (localStorage.getItem('login') === 'true') {
      this.setState({ show: true });
      if (localStorage.typeOfUser === 'company') {
        this.typeOfUser = 'company';
        this.userId = localStorage.getItem('userId');
        this.company = localStorage.getItem('company');
        this.userPhoto = localStorage.getItem('userPhoto');
        this.userName = localStorage.getItem('userName');
      } else {
        this.typeOfUser = 'freelancer';
        this.userId = localStorage.getItem('userId');
        this.company = localStorage.getItem('company');
        this.userPhoto = localStorage.getItem('userPhoto');
        this.userName = localStorage.getItem('userName');
      }
    } else this.setState({ show: false });
    // loadScripts1(this.instance, false);
  }

  HandleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('typeOfUser');
    localStorage.removeItem('company');
    localStorage.removeItem('userId');
    localStorage.removeItem('userPhoto');
    localStorage.removeItem('userName');
  }

  render() {
    if (this.state.show === true) {
      return (
        <div
          ref={(el) => (this.instance = el)}
          id="wt-sidebarwrapper"
          className="wt-sidebarwrapper "
        >
          <div id="wt-btnmenutoggle" className="wt-btnmenutoggle">
            <span className="menu-icon">
              <em></em>
              <em></em>
              <em></em>
            </span>
          </div>
          <div id="wt-verticalscrollbar" className="wt-verticalscrollbar">
            <div className="wt-companysdetails wt-usersidebar">
              <figure className="wt-companysimg">
                <img src="images/sidebar/img-01.jpg" alt="img description" />
              </figure>
              <div className="wt-companysinfo">
                <figure>
                  <img src={this.userPhoto} alt={this.userName} />
                </figure>
                <div className="wt-title">
                  <h2>
                    <Link to="/"> {this.userName} </Link>
                  </h2>
                  <span> {this.company} </span>
                </div>
                <div className="wt-btnarea">
                  <Link to="dashboard-postjob.html" className="wt-btn">
                    Post a Job
                  </Link>
                </div>
              </div>
            </div>
            <nav id="wt-navdashboard" className="wt-navdashboard">
              <ul>
                <li className="menu-item-has-children">
                  <Link to="/">
                    <i className="ti-dashboard"></i>
                    <span>Insights</span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <hr />
                      <Link to="dashboard-insights.html">Insights</Link>
                    </li>
                    <li>
                      <hr />
                      <Link to="dashboard-insightsuser.html">
                        Insights User
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={`/DashboardProfile/${this.userId}`}>
                    <i className="ti-briefcase"></i>
                    <span>My Profile</span>
                  </Link>
                </li>
                <li className="menu-item-has-children wt-active">
                  <a>
                    <i className="ti-package"></i>
                    <span>All Jobs</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <hr />
                      <Link to={`/DashboardCompletedJobs/${this.userId}`}>
                        Completed Jobs
                      </Link>
                    </li>
                    <li className="wt-active">
                      <hr />
                      <Link to={`/DashboardCanceledJobs/${this.userId}`}>
                        Cancelled Jobs
                      </Link>
                    </li>
                    <li>
                      <hr />
                      <Link to={`/DashboardOngoingJobs/${this.userId}`}>
                        Ongoing Jobs
                      </Link>
                    </li>
                    {/* <li>
                      <hr />
                      <Link to="dashboard-ongoingsingle.html">
                        Ongoing Single
                      </Link>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link to={`/DashboardManageJobs/${this.userId}`}>
                    <i className="ti-announcement"></i>
                    <span>Manage Jobs</span>
                  </Link>
                </li>
                <li className="wt-notificationicon menu-item-has-children">
                  <Link to={`/DashboardMessages/${this.state.userId}`}>
                    <i className="ti-pencil-alt"></i>
                    <span>Messages</span>
                  </Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <hr />
                      <Link to="dashboard-messages.html">Messages</Link>
                    </li>
                    <li>
                      <hr />
                      <Link to="dashboard-messages2.html">Messages V 2</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to={`/DashboardSavedItems/${this.userId}`}>
                    <i className="ti-heart"></i>
                    <span>My Saved Items</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to="dashboard-invocies.html">
                    <i className="ti-file"></i>
                    <span>Invoices</span>
                  </Link> 
                </li> */}
                {/* <li>
                  <Link to="dashboard-category.html">
                    <i className="ti-layers"></i>
                    <span>Category</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="dashboard-packages.html">
                    <i className="ti-money"></i>
                    <span>Packages</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to="dashboard-proposals.html">
                    <i className="ti-bookmark-alt"></i>
                    <span>Proposals</span>
                  </Link>
                </li> */}
                <li>
                  <Link to={`/DashboardAccountSettings/${this.userId}`}>
                    <i className="ti-anchor"></i>
                    <span>Account Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="dashboard-helpsupport.html">
                    <i className="ti-tag"></i>
                    <span>Help &amp; Support</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="ti-shift-right"></i>
                    <span>Logout</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="wt-navdashboard-footer">
              <span>Worktern. © 2019 All Rights Reserved.</span>
            </div>
          </div>
        </div>
      );
    } else {
      return <div ref={(el) => (this.instance = el)}></div>;
    }
  }
}
