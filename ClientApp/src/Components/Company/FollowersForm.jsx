import React, { Component } from 'react';

// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { GetFollowerList } from '../GetData/GetFollowerList';

class FollowersForm extends Component {
  constructor(props) {
    super(props);
    // {handlefollowerChange} = this.props;
    this.state = {
      followerList: [],
      loading: true,
      // Searchfollower: '',
      // CheckedCategories: [],
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  // fullfollowerList = [];

  // handleChange(event) {
  //   //  console.log(event.target.value);
  //   const target = event.target;
  //   if (target.name === 'Searchfollower') {
  //     this.setState({ Searchfollower: event.target.value });
  //   } else {
  //     // const value = target.checked;
  //     // const name = target.name;
  //     this.props.handlefollowerChange(target);
  //     // this.setState({ [name]: value });
  //     // console.log(JSON.stringify(this.state));
  //     // this.props.onChangefollower({ [name]: value });
  //   }
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   // // if (this.state.Searchfollower !== '') {
  //   let cats;
  //   if (this.fullfollowerList !== []) {
  //     cats = this.fullfollowerList.filter(
  //       (cat) => cat.followerName.search(this.state.Searchfollower) !== -1,
  //     );
  //   } else cats = [];
  //   this.setState({ followerList: cats });
  //   // }
  // }

  renderFollower(data) {
    return (
      <li key={data.userId}>
        <Link to={`/UserSingle/:${data.userId}`}>
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
FollowersForm = reduxForm({
  form: 'FollowersForm',
})(FollowersForm);

export default FollowersForm;
