import React, { Component } from 'react';
import '../../css/main.css';
import '../../css/dashboard.css';
//import ReactDom from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
//import logo from './logo.svg';
import Header from '../Header/Header';
import HomeBanner from './HomeBanner/HomeBanner';
import WtWrapper from './WtWrapper/WtWrapper';
import Footer from '../Footer/Footer';
import loadScripts1 from '../Functions/LoadScripts';
// import { GetFreelancer } from '../GetData/GetFreelancer';
// import { DashBoardC } from './DashboardC';

class Home extends Component {
  constructor(props) {
    super(props);
    this.LoginSuccessfull = this.LoginSuccessfull.bind(this);
    this.Logout = this.Logout.bind(this);
    this.state = {
      reset: false,
    };
  }

  Logout() {
    this.forceUpdate();
    this.setState({ reset: !this.state.reset });
    //this.props.history.push('/Home');
  }

  LoginSuccessfull() {
    //  this.props.history.push('/Home');
  }
  componentDidMount() {
    loadScripts1(this.instance, false);
  }
  handleSubmit = (values) => {};

  render() {
    return (
      <div className="wt-login">
        <title>Home</title>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />

        <div
          id="wt-wrapper"
          ref={(el) => (this.instance = el)}
          className="wt-wrapper wt-haslayout"
        >
          {/*  Content Wrapper Start  */}
          <div className="wt-contentwrapper">
            <Header login={this.LoginSuccessfull} Logout={this.Logout} />
            {/* <SeekForm /> */}
            <HomeBanner />
            <WtWrapper />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
