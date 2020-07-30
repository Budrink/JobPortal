import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SidePanel extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div className="wt-haslayout wt-dbsectionspace wt-codescansidebar">
          <div className="tg-authorcodescan wt-codescanholder">
            <figure className="tg-qrcodeimg">
              <img alt="img description" src="/images/qrcode.png" />
            </figure>
            <div className="tg-qrcodedetail">
              <span className="lnr lnr-laptop-phone" />
              <div className="tg-qrcodefeat">
                <h3>
                  Scan with your <span>Smart Phone </span> To Get It Handy.
                </h3>
              </div>
            </div>
            <div className="wt-codescanicons">
              <span>Share Your Profile</span>
              <ul className="wt-socialiconssimple">
                <li className="wt-facebook">
                  <Link to="/">
                    <i className="fa fa-facebook-f" />
                  </Link>
                </li>
                <li className="wt-twitter">
                  <Link to="/">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="wt-linkedin">
                  <Link to="/">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li className="wt-clone">
                  <Link to="/">
                    <i className="far fa-clone" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="wt-companyad">
            <figure className="wt-companyadimg">
              <img alt=" description" src="/images/add-img.jpg" />
            </figure>
            <span>Advertisement 255px X 255px</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SidePanel;
