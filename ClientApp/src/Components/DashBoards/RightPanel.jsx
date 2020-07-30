import React, { Component } from 'react';
class RightPanel extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-3">
        <aside className="wt-sidebar wt-dashboardsave" id="wt-sidebar">
          <div className="wt-proposalsr">
            <div className="wt-proposalsrcontent">
              <figure>
                <img alt="img" src="/images/thumbnail/img-17.png" />
              </figure>
              <div className="wt-title">
                <h3>{this.props.amountOngoingProjects}</h3>
                <span>Total Ongoing Jobs</span>
              </div>
            </div>
          </div>
          <div className="wt-proposalsr">
            <div className="wt-proposalsrcontent wt-componyfolow">
              <figure>
                <img alt="img" src="/images/thumbnail/img-16.png" />
              </figure>
              <div className="wt-title">
                <h3>{this.props.amountCompletedProjects}</h3>
                <span>Total Completed Jobs</span>
              </div>
            </div>
          </div>
          <div className="wt-proposalsr">
            <div className="wt-proposalsrcontent  wt-freelancelike">
              <figure>
                <img alt="img" src="/images/thumbnail/img-15.png" />
              </figure>
              <div className="wt-title">
                <h3>{this.props.amountCancelledProjects}</h3>
                <span>Total Cancelled Jobs</span>
              </div>
            </div>
          </div>
        </aside>
        <div className="wt-companyad">
          <figure className="wt-companyadimg">
            <img alt="img description" src="/images/add-img.jpg" />
          </figure>
          <span>Advertisement 255px X 255px</span>
        </div>
      </div>
    );
  }
}

export default RightPanel;
