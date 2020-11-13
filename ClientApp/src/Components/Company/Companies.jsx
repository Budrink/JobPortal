import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import FavouriteButton from '../Forms/FavouriteButton';
class Companies extends Component {
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
  fullCompanyList = [];

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
    if (this.fullCompanyList !== []) {
      cats = this.fullCompanyList.filter(
        (cat) => cat.freelancerName.search(this.state.SearchFreelancer) !== -1,
      );
    } else cats = [];
    this.setState({ fullCompanyList: cats });
    // }
  }

  renderCompany(data) {
    //  console.log(data.company.companyImgJpg);
    let Verifiedcontext = data.company.verifiedCompany ? (
      <a>
        <i className="fa fa-check-circle"></i>
        Verified Company
      </a>
    ) : (
      <a>
        <i className="fa" />
      </a>
    );
    return (
      <div
        className="col-12 col-sm-12 col-md-12 col-lg-6"
        key={data.company.companyId}
      >
        <div className="wt-companysdetails">
          <figure className="wt-companysimg">
            <img
              src={data.company.companyImgJpg}
              alt={data.company.companyName}
            />
          </figure>
          <div className="wt-companysinfo">
            <figure>
              <img
                src={data.company.companyImgPng}
                alt={data.company.companyName}
              />
            </figure>
            <div className="wt-title">
              {Verifiedcontext}
              <h2>{data.company.companyName}</h2>
            </div>
            <ul className="wt-postarticlemeta">
              <li>
                <Link to={`/JobListing?company=${data.company.companyId}`}>
                  <span>Open Jobs</span>
                </Link>
              </li>
              <li>
                <Link to={`/CompanySingle/${data.company.companyId}`}>
                  <span>Full Profile</span>
                </Link>
              </li>
              <li className="wt-following">
                <FavouriteButton
                  itemId={data.company.companyId}
                  saved={data.company.saved}
                  itemType="company"
                />
                {/* <Link to="/">
                  <span> Following</span>
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  renderTable(companyList) {
    // if (companyList !== []) {
    let content = companyList.map((company) => this.renderCompany({ company }));
    return <div className="row">{content}</div>;
  } // else return <div> Loading </div>;

  render() {
    let companyList = this.props.companyList;
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderTable(companyList)
    );

    // );
    return <div className="row">{contents}</div>;
  }
}
Companies = reduxForm({
  form: 'Companies',
})(Companies);

export default Companies;
