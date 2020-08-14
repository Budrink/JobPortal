import React from 'react';
import { Link } from 'react-router-dom';
import { amountOfCompanyItemsInList } from '../../Data/GlobalValues';
import Paging from '../../Forms/Paging';
// import { GetSavedFreelancers } from '../../GetData/GetSavedFreelancers';
import { GetSavedCompanyList } from '../../GetDataNew/GetSavedCompanyList';
// import { GetSavedProjectList } from '../../GetData/GetSavedProjectList';
import FavouriteButton from '../../Forms/FavouriteButton';

class SavedCompanyList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      companyList: [],
      amountOfItemsOnPage: amountOfCompanyItemsInList,
      pageNumber: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);

    //  const { companyiD } = this.props;
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData();
  }

  populateData = async () => {
    const data = await GetSavedCompanyList(
      localStorage.getItem('userId'),
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
    );
    this.setState({ companyList: data }, () => {
      this.setState({ loading: false }, () => {});
    });
  };
  componentDidMount() {
    this.populateData();
  }
  pagingCreate() {
    if (this.state.companyList.companies !== undefined) {
      return (
        <Paging
          linkName="SavedCompanyList"
          totalAmountOfItems={this.state.companyList.totalAmountOfCompanies}
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  createFeaturedContent(featured) {
    return featured ? <i className="fa fa-check-circle"></i> : null;
  }

  CreateCompanyList(companies) {
    const content = companies.companies.map((company) => (
      <div className="wt-followedcompnies" key={company.companyId}>
        <div className="wt-userlistinghold wt-userlistingsingle">
          <figure className="wt-userlistingimg">
            <img src={company.companyImgPng} alt={company.companyName} />
          </figure>
          <div className="wt-userlistingcontent">
            <div className="wt-contenthead wt-followcomhead">
              <div className="wt-title">
                <Link to={`/CompanySingle/:${company.companyId}`}>
                  {this.createFeaturedContent(company.verifiedCompany)}
                  Verified Company
                </Link>
                <h3>{company.companyName}</h3>
              </div>
              <ul className="wt-followcompomy-breadcrumb wt-userlisting-breadcrumb">
                <li>
                  <Link
                    to={`/JobListing?company=${company.companyId} status='ongoing'`}
                  >
                    Open Jobs
                  </Link>
                </li>
                <li>
                  <Link to={`/CompanySingle/:${company.companyId}`}>
                    Full Profile
                  </Link>
                </li>
                <li>
                  <FavouriteButton saved={true} itemType="company" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ));
    return <div className="wt-focomponylist">{content}</div>;
  }

  render() {
    let paging = !this.state.loading ? this.pagingCreate() : null;
    let content = !this.state.loading ? (
      <div className="wt-userexperience wt-followcompomy">
        <div className="wt-tabscontenttitle">
          <h2>Followed Companies</h2>
        </div>
        {this.CreateCompanyList(this.state.companyList)}
      </div>
    ) : (
      <div>Loading ...</div>
    );
    return (
      <div>
        {content} {paging}
      </div>
    );
  }
}

export default SavedCompanyList;
