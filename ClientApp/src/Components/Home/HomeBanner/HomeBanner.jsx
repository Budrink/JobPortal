import React, { Component } from 'react';

import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/font-awesome.min.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/font-awesome.min.css';
import '../../../css/linearicons.css';
import '../../../css/jquery-ui.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/transitions.css';
import SeekForm from '../../Forms/SeekForm';
// import loadScripts1 from '../../Functions/LoadScripts';

class HomeBanner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stringForSearch: '',
      typeSearch: '',
      redirect: false,
      loading: true,
      // CheckedCategories: [],
    };

    // this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.setState({ stringForSearch: '' });
    this.setState({ typeSearch: 'freelancers' });
    // loadScripts1(this.instance, false);
  }

  // submit = (values) => {
  //   // console.log(values.searchString);
  //   // console.log(values);
  //   let str = '';
  //   let type = 'freelancer';
  //   if (values !== undefined) {
  //     str = values.searchString !== undefined ? values.searchString : '';
  //     type = values.searchtype !== undefined ? values.searchtype : 'freelancer';
  //   }
  //   this.setState({ stringForSearch: str });
  //   this.setState({ searchtype: type });
  //   this.setState({ redirect: true });
  // };
  render() {
    // if (this.state.redirect === true) {
    //   if (this.state.searchtype === 'freelancer') {
    //     if (this.state.stringForSearch === '') {
    //       return <Redirect to="/UserListing" />;
    //     } else {
    //       console.log(3);
    //       return (
    //         <Redirect
    //           to={`/UserListing?string=${this.state.stringForSearch}`}
    //         />
    //       );
    //     }
    //   } else {
    //     console.log(5);
    //     return <Redirect to={`/UserListing/${this.state.stringForSearch}`} />;
    //   }
    // } else
    return (
      <div
        className="wt-haslayout wt-bannerholder"
        ref={(el) => (this.instance = el)}
      >
        {/* <head> */}
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5">
              <div className="wt-bannerimages">
                <figure className="wt-bannermanimg" data-tilt>
                  <img
                    src="/images/bannerimg/img-01.png"
                    alt="img description"
                  />
                  <img
                    src="/images/bannerimg/img-02.png"
                    className="wt-bannermanimgone"
                    alt="img description"
                  />
                  <img
                    src="/images/bannerimg/img-03.png"
                    className="wt-bannermanimgtwo"
                    alt="img description"
                  />
                </figure>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div className="wt-bannercontent">
                <div className="wt-bannerhead">
                  <div className="wt-title">
                    <h1>
                      <span>Hire expert freelancers</span> for any job, Online
                    </h1>
                  </div>
                  <div className="wt-description">
                    <p>
                      Consectetur adipisicing elit sed dotem eiusmod tempor
                      incuntes ut labore etdolore maigna aliqua enim.
                    </p>
                  </div>
                </div>
                <SeekForm />
                {/* onSubmit={this.submit} /> */}

                <div className="wt-videoholder">
                  <div className="wt-videoshow">
                    <a
                      data-rel="prettyPhoto[video]"
                      href="https://www.youtube.com/watch?v=J37W6DjqT3Q"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="wt-videocontent">
                    <span>
                      See For Yourself!
                      <em>How it works &amp; experience the ultimate joy.</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeBanner;
