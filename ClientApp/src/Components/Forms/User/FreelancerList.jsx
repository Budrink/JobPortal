import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import 'js/vendor/modernizr-2.8.3-respond-1.4.2.min.js';
import { reduxForm } from 'redux-form';
import FavouriteButton from '../../Forms/FavouriteButton';

class FreelancerList extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {freelancerList} = this.props
    this.state = {
      //  freelancerList: [],
      // loading: true,
      SearchFreelancer: '',
      // CheckedCategories: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  fullfreelancerList = [];

  handleChange(event) {
    const target = event.target;
    if (target.name === 'SearchFreelancer') {
      this.setState({ SearchFreelancer: event.target.value });
    } else {
      const value = target.checked;
      const name = target.name;
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // // if (this.state.SearchFreelancer !== '') {
    let cats;
    if (this.fullfreelancerList !== []) {
      cats = this.fullfreelancerList.filter(
        (cat) => cat.freelancerName.search(this.state.SearchFreelancer) !== -1,
      );
    } else cats = [];
    this.setState({ freelancerList: cats });
    // }
  }

  renderTagList(data) {
    if (data) {
      return data.map((uskill) => (
        <Link
          to={`/UserListing?skillFilter=${uskill.skill.name}`}
          className="wt-tag wt-widgettag"
          key={uskill.skill.id}
        >
          {uskill.skill.name}
        </Link>
      ));
    } else return null;
  }

  renderFreelancer(data) {
    let content;
    if (data.freelancer.userSkills !== undefined)
      content = this.renderTagList(data.freelancer.userSkills);
    else content = null;
    let featuredUserContent = data.freelancer.plusMember ? (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : null;
    let style = ['', '', '', '', ''];
    if (data.freelancer.userRates !== undefined) {
      for (let i = 0; i < Math.round(Number(data.freelancer.userRates)); i++) {
        style[i] = 'active';
      }
    }
    return (
      <div
        className="wt-userlistinghold wt-featured"
        key={data.freelancer.userId}
      >
        {featuredUserContent}
        <figure className="wt-userlistingimg">
          <img alt="freelancer" src={data.freelancer.userPhoto} />
        </figure>
        <div className="wt-userlistingcontent">
          <div className="wt-contenthead">
            <div className="wt-title">
              <Link to={`/UserSingle/${data.freelancer.userId}`}>
                {/* <Link to="UserSingle/4"> */}
                <i className="fa fa-check-circle" />
                {data.freelancer.firstName + ` ` + data.freelancer.lastName}
              </Link>
              <h2>{data.freelancer.title}</h2>
            </div>
            <ul className="wt-userlisting-breadcrumb">
              <li>
                <span>
                  <i className="far fa-money-bill-alt" />$
                  {data.freelancer.hourRates}/ hr
                </span>
              </li>
              <li>
                <span>
                  <img
                    alt={data.freelancer.country.countryName}
                    src={data.freelancer.country.countryFlag}
                  />
                  {data.freelancer.country.countryName}
                </span>
              </li>
              <li>
                <FavouriteButton
                  itemId={data.freelancer.userId}
                  saved={data.freelancer.saved}
                  itemType="freelancer"
                />
                {/* <a className="wt-clicksave" href="javascript.html;">
                  // <i className="fa fa-heart" /> Save //{' '}
                </a> */}
              </li>
            </ul>
          </div>
          <div className="wt-rightarea">
            <div className="rating-mini">
              <span className={style[0]}></span>
              <span className={style[1]}></span>
              <span className={style[2]}></span>
              <span className={style[3]}></span>
              <span className={style[4]}></span>
            </div>
            {/* <span className="wt-starsvtwo">
              <i className="fa fa-star fill" />
              <i className="fa fa-star fill" />
              <i className="fa fa-star fill" />
              <i className="fa fa-star fill" />
              <i className="fa fa-star fill" />
            </span> */}
            <span className="wt-starcontent">
              {data.freelancer.userRates !== null
                ? data.freelancer.userRates
                : 0}
              /<sub>5</sub>
              <em>( {data.freelancer.feedBacksCount} Feedback)</em>
            </span>
          </div>
        </div>
        <div className="wt-description">{data.freelancer.userDescription}</div>

        <div className="wt-tag wt-widgettag" key={data.freelancer.userId}>
          {content}

          <a className="wt-tag wt-widgettag">...</a>
        </div>
      </div>
    );
  }
  // componentDidMount() {
  //   this.populateData();
  // }
  renderTable(cats) {
    if (cats !== []) {
      return cats.freelancerList.freelancers.map((freelancer) => (
        <div className="form-group" key={freelancer.userId}>
          {this.renderFreelancer({ freelancer })}
        </div>
      ));
    } else return <div> Loading </div>;
  }

  // async populateData() {
  // if (this.state.freelancerList.length === 0) {
  //   const data = this.props.freelancerList; //await getFreelancerList(1, 3);
  //   // this.setState({ freelancerList: data }, () => {
  //   //   this.setState({ loading: false }, () => {});
  //   this.fullfreelancerList = this.props.freelancerList; //this.state.freelancerList;
  // });
  //   }
  // }

  render() {
    let freelancerList = this.props.freelancerList;
    // console.log(JSON.stringify(freelancerList));
    // // console.log(
    // JSON.stringify(freelancerList.freelancerList.freelancers);
    // );
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(freelancerList)
    );

    // );
    return <div ref={(el) => (this.instance = el)}>{contents}</div>;
  }
}
FreelancerList = reduxForm({
  form: 'FreelancerList',
})(FreelancerList);

export default FreelancerList;
