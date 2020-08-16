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

class Home extends Component {
  constructor(props) {
    super(props);
    this.LoginSuccessfull = this.LoginSuccessfull.bind(this);
    this.Logout = this.Logout.bind(this);
    this.state = {
      reset: true,
    };
  }

  Logout() {
    this.props.history.push('/');
  }

  LoginSuccessfull() {
    this.props.history.push('/');
  }

  componentDidMount() {
    // loadScripts1(this.instance, false);
  }
  handleSubmit = (values) => {};

  render() {
    let content;
    if (this.state.reset === true) {
      content = (
        <div className="wt-login">
          <title>Home</title>
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="icon" href="/images/favicon.png" type="image/x-icon" />

          <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
            {/*  Content Wrapper Start  */}
            <div className="wt-contentwrapper">
              <Header Login={this.LoginSuccessfull} Logout={this.Logout} />
              {/* <SeekForm /> */}
              <HomeBanner />
              <WtWrapper />
              <Footer />
            </div>
          </div>
        </div>
      );
    } else {
      content = null;
    }
    return <div ref={(el) => (this.instance = el)}> {content} </div>;
  }
}

export default Home;
