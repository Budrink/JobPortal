import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { array } from 'prop-types';
class UserTags extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.btnClick = this.btnClick.bind(this);
  // }
  renderTag(data) {
    // console.log(JSON.stringify(this.props.skillList[0]));
    return (
      <Link key={data} to={`/UserListing/?category=${data}`}>
        {data}
      </Link>
    );
  }

  renderTable(tags) {
    if (tags !== undefined) {
      return tags.map((tag) => this.renderTag(tag));
    }
  }

  render() {
    let contents =
      this.props.tagList !== undefined ? (
        this.renderTable(this.props.tagList)
      ) : (
        <div></div>
      );

    return (
      <div className="wt-widget">
        <div className="wt-widgettitle">
          <h2>Similar Freelancers</h2>
          <div className="wt-widgetcontent">
            <div className="wt-widgettag wt-widgettagvtwo">{contents}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserTags;
