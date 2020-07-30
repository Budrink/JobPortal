import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetFreelancer } from '../GetData/GetFreelancer';
import GetCompany from '../GetData/GetCompany';

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      userId: '',
      typeOfUser: 'company',
      companyName: '',
      loading: true,
    };
    this.HandleLogout = this.HandleLogout.bind(this);
  }
  HandleLogout(e) {
    e.preventDefault();
    localStorage.removeItem('userType');
    localStorage.removeItem('company');
    localStorage.removeItem('userId');
    localStorage.removeItem('userPhoto');
    localStorage.removeItem('userName');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('loginTime');
    localStorage.removeItem('login');
    localStorage.removeItem('rememberMe');
    this.props.Logout();
  }

  async populateData() {
    let typeOfUser = this.props.typeOfUser; //localStorage.getItem('typeOfUser');
    this.setState({ typeOfUser: typeOfUser });
    let userId = localStorage.getItem('userId');
    this.setState({ userId: userId });
    switch (typeOfUser) {
      case 'company':
        /// можно взять короткий запрос
        let company = await GetCompany(userId);
        this.setState({ user: company });
        this.setState({ companyName: company.companyName });
        break;
      case 'freelancer':
        let freelancer = await GetFreelancer(userId);
        this.setState({ user: freelancer });
        const companyName = freelancer.userCompany
          ? freelancer.userCompany.companyName
          : '';
        this.setState({ companyName: companyName });
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    this.populateData();
    this.setState({ loading: false });
  }
  createContext() {
    if (this.state.user === undefined) return <div />;
    else {
      return (
        <div>
          <figure className="wt-userimg">
            <img
              alt={this.state.user.userName}
              src={this.state.user.userPhoto}
            />
          </figure>
          <div className="wt-username">
            <h3>{this.state.user.userName}</h3>
            <span>{this.state.companyName}</span>
          </div>
        </div>
      );
    }
  }
  render(context = this.state.loading ? null : this.createContext()) {
    return (
      <div className="wt-userlogedin" ref={(el) => (this.instance = el)}>
        {context}
        {/* <div className="wt-btnarea">
          <a className="wt-btn" href="dashboard-postjob.html">
            Post a Job
          </a>
        </div> */}
        <nav className="wt-usernav">
          <ul>
            <li className="menu-item-has-children page_item_has_children">
              <a href="javascript.html">
                <span>Insights</span>
              </a>
              <ul className="sub-menu children">
                <li>
                  <a href="dashboard-insights.html">Insights</a>
                </li>
                <li>
                  <a href="dashboard-insightsuser.html">Insights User</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to={`/DashboardProfile/${this.state.userId}`}>
                <span>My Profile</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <a>
                <span>All Jobs</span>
              </a>
              <ul className="sub-menu">
                <li>
                  <Link to={`/DashboardCompletedJobs/${this.state.userId}`}>
                    Completed Jobs
                  </Link>
                </li>
                <li>
                  <Link to={`/DashboardCanceledJobs/${this.state.userId}`}>
                    Cancelled Jobs
                  </Link>
                </li>
                <li>
                  <Link to={`/DashboardOngoingJobs/${this.state.userId}`}>
                    Ongoing Jobs
                  </Link>
                </li>
                {/* <li>
                  <a href="dashboard-ongoingsingle.html">Ongoing Single</a>
                </li> */}
              </ul>
            </li>
            <li>
              <Link to={`/DashboardManageJobs/${this.state.userId}`}>
                <span>Manage Jobs</span>
              </Link>
            </li>
            <li className="wt-notificationicon menu-item-has-children">
              <Link to={`/DashboardMessages/${this.state.userId}`}>
                Messages
              </Link>
              {/* <ul className="sub-menu">
                <li>
                  <Link to={`/DashboardMessages/${this.state.userId}`}>
                    Messages
                  </Link>
                </li>
                <li>
                  <a href="dashboard-messages2.html">Messages V 2</a>
                </li>
              </ul> */}
            </li>
            <li>
              <Link to={`/DashboardSavedItems/${this.state.userId}`}>
                <span>My Saved Items</span>
              </Link>
            </li>
            {/* <li>
              <a href="dashboard-invocies.html">
                <span>Invoices</span>
              </a>
            </li> */}
            {/* <li>
              <a href="dashboard-category.html">
                <span>Category</span>
              </a>
            </li> */}
            {/* <li>
              <a href="dashboard-packages.html">
                <span>Packages</span>
              </a>
            </li> */}
            {/* <li>
              <a href="dashboard-proposals.html">
                <span>Proposals</span>
              </a>
            </li> */}
            <li>
              <Link to={`/DashboardAccountSettings/${this.state.userId}`}>
                <span>Account Settings</span>
              </Link>
            </li>
            <li>
              <a href="dashboard-helpsupport.html">
                <span>Help &amp; Support</span>
              </a>
            </li>
            <li>
              <button onClick={this.HandleLogout}>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideBar;
