import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { GetFollowerList } from '../GetDataNew/GetFollowerList';

class FollowersForm extends Component {
  constructor(props) {
    super(props);
    // {handlefollowerChange} = this.props;
    this.state = {
      followerList: [],
      loading: true,
    };
  }

  renderFollower(data) {
    return (
      <li key={data.id}>
        <Link to={`/UserSingle/${data.id}`}>
          <span>
            <img src={data.userPhoto} alt={data.userName} />
          </span>
          <span>{data.userName} </span>
        </Link>
      </li>
    );
  }
  componentDidMount() {
    this.populateData();
  }
  renderTable(cats) {
    return cats.map((follower) => this.renderFollower(follower));
  }
  async populateData() {
    const data = await GetFollowerList(this.props.companyId);
    this.setState({ followerList: data }, () => {});

    this.setState({ loading: false }, () => {});
    //   this.fullfollowerList = this.state.followerList;
  }

  render() {
    // let contents = this.state.loading ? (
    //   <div>{/* <em>Loading...</em> */}</div>
    // ) : (
    let contents = this.renderTable(this.state.followerList);
    // );

    // );
    return (
      <div
        ref={(el) => (this.instance = el)}
        className="wt-widgetcontent wt-comfollowers wt-verticalscrollbar"
      >
        <ul>{contents}</ul>
      </div>
    );
  }
}

export default FollowersForm;
