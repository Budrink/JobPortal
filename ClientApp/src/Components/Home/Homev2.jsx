import React, { Component } from 'react';
//import ReactDom from 'react-dom';
//import logo from './logo.svg';
import Header from '../Header/Header';
import HomeBanner from './HomeBanner/HomeBanner';
import WtWrapper from './WtWrapper/WtWrapper';
import Footer from '../Footer/Footer';
import loadScripts1 from '../Functions/LoadScripts';
// import { DashBoardC } from './DashboardC';
export default class Homev2 extends Component {
  constructor(props) {
    super(props);
    this.Logout = this.Logout.bind(this);
  }
  componentDidMount() {
    loadScripts1(this.instance, false);
  }
  LoginSuccessfull() {}
  Logout() {
    this.props.history.push('/Home');
  }

  render() {
    return (
      <div className="wt-login">
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>Home</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />

        <div
          id="wt-wrapper"
          ref={(el) => (this.instance = el)}
          className="wt-wrapper wt-haslayout"
        >
          {/*  Content Wrapper Start  */}
          <div className="wt-contentwrapper">
            <Header Logout={this.Logout} />
            {/* <SeekForm /> */}
            <HomeBanner login={this.loginSuccessfull} />
            <WtWrapper />
            <Footer />
            {/* <div className="preloader-outer">
                   <div className="loader"></div>
                  </div> */}
            {/* <DashBoardC /> */}
            {/* </div> */}
            {/* Content Wrapper End 
            </div>
              Wapper End*/}
          </div>
        </div>
      </div>
    );
  }
}
