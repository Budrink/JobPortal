import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import { createBrowserHistory } from 'history';
import Home from './Components/Home/Home';
import Homev2 from './Components/Home/Homev2';
import Page404 from './Components/About/Page404';
import About from './Components/About/About';
import Terms from './Components/About/Terms';
import ArticleClassic from './Components/Articles/ArticleClassic';
import ArticleGrid from './Components/Articles/ArticleGrid';
import ArticleList from './Components/Articles/ArticleList';
import ArticleSingle from './Components/Articles/ArticleSingle';
import ComingSoon from './Components/About/ComingSoon';
import PrivacyPolicy from './Components/About/PrivacyPolicy';
import CompanyGrid from './Components/Company/CompanyGrid';
import CompanySingle from './Components/Company/CompanySingle';
import JobSingle from './Components/Job/JobSingle';
import JobListing from './Components/Job/JobListing';
import JobProposal from './Components/Job/JobProposal';
import UserListing from './Components/User/UserListing';
import UserSingle from './Components/User/UserSingle';
import HowItWorks from './Components/About/HowItWorks/HowItWorks';
import Register from './Components/Registration/Register';
import Register2 from './Components/Registration/Register2';
import Register3 from './Components/Registration/Register3';
import Register4 from './Components/Registration/Register4';
import DashboardProfile from './Components/DashBoards/DashBoardProfile/DashboardProfile';
import DashboardAccountSettings from './Components/DashBoards/DashboardAccountSettings/DashboardAccountSettings';
import DashboardCancelJobs from './Components/DashBoards/DashboardCancelJobs/DashboardCancelJobs';
import DashboardCompleteJobs from './Components/DashBoards/DashboardCompleteJobs/DashboardCompleteJobs';
import DashboardOngoingJobs from './Components/DashBoards/DashboardOngoingJobs/DashboardOngoingJobs';
import DashboardOngoingJobSingle from './Components/DashBoards/DashboardOngoingJobs/DashboardOngoingJobSingle';
import DashboardManageJobs from './Components/DashBoards/DashboardManageJobs/DashboardManageJobs';
import DashboardSavedItems from './Components/DashBoards/DashboardSavedItems/DashboardSavedItems';
import DashboardProposals from './Components/DashBoards/DashboardProposals/DashboardProposals';
import DashboardMessages from './Components/DashBoards/DashboardMessages/DashboardMessages';

// import Login from './Components/Auth/LoginForm';
const browserHistory = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/Homev2" component={Homev2} />
        <Route exact path="/" component={Homev2} />
        <Route path="/Home" component={Home} />
        <Route exact path="/Page404" component={Page404} />
        <Route exact path="/About" component={About} />
        <Route exact path="/ArticleClassic" component={ArticleClassic} />
        <Route exact path="/ArticleGrid" component={ArticleGrid} />
        <Route exact path="/ArticleList" component={ArticleList} />
        <Route
          exact
          path="/ArticleSingle/:articleId"
          component={ArticleSingle}
        />
        <Route exact path="/ComingSoon" component={ComingSoon} />
        <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route exact path="/CompanyGrid" component={CompanyGrid} />
        <Route path="/CompanySingle/:companyId" component={CompanySingle} />
        <Route path="/JobSingle/:jobId" component={JobSingle} />
        <Route exact path="/JobListing" component={JobListing} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Register2" component={Register2} />
        <Route exact path="/Register3" component={Register3} />
        <Route exact path="/Register4" component={Register4} />
        <Route exact path="/Terms" component={Terms} />
        {/* <Route path="/Login" component={Login} /> */}
        <Route path="/DashboardProfile/:userId" component={DashboardProfile} />
        <Route
          path="/DashboardAccountSettings/:userId"
          component={DashboardAccountSettings}
        />
        <Route
          path="/DashboardCanceledJobs/:userId"
          component={DashboardCancelJobs}
        />
        <Route
          path="/DashboardCompletedJobs/:userId"
          component={DashboardCompleteJobs}
        />
        <Route
          path="/DashboardOngoingJobs/:userId"
          component={DashboardOngoingJobs}
        />
        <Route
          path="/DashboardOngoingJobSingle/:jobId"
          component={DashboardOngoingJobSingle}
        />
        <Route
          exact
          path="/JobListing/:stringForSearching"
          component={JobListing}
        />
        <Route
          exact
          path="/DashboardManageJobs/:userId"
          component={DashboardManageJobs}
        />
        <Route
          exact
          path="/DashboardProposals/:jobId"
          component={DashboardProposals}
        />
        <Route
          exact
          path="/DashboardSavedItems/:userId"
          component={DashboardSavedItems}
        />
        <Route
          exact
          path="/DashboardMessages/:userId"
          component={DashboardMessages}
        />
        <Route path="/JobProposal" component={JobProposal} />
        <Route path="/UserListing" component={UserListing} />
        <Route path="/UserSingle/:userId" component={UserSingle} />
        <Route exact path="/HowItWorks" component={HowItWorks} />
      </Router>
    );
  }
}
export default App;
