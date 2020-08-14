import React, { PureComponent } from 'react';
import '../../css/bootstrap.min.css';
import '../../css/normalize.css';
import '../../css/scrollbar.css';
import '../../css/fontawesome/fontawesome-all.css';
import '../../css/font-awesome.min.css';
import '../../css/owl.carousel.min.css';
import '../../css/linearicons.css';
import '../../css/jquery-ui.css';
import '../../css/tipso.css';
import '../../css/chosen.css';
import '../../css/prettyPhoto.css';
import '../../css/main.css';
import '../../css/color.css';
import '../../css/transitions.css';
import '../../css/responsive.css';
import { amountOfCompanyItemsInList } from '../Data/GlobalValues';
import Header1 from '../Header/Header1';
import NumberOfEmployeesForm from '../Forms/NumberOfEmployeesForm';
import CountryForm from '../Forms/CountryForm';
import JobTypeForm from '../Forms/JobTypeForm';
import loadScripts1 from '../Functions/LoadScripts';
import Companies from './Companies';
import { createArrayForFilter } from '../Functions/createArrayForFilter';
import { getCompanyList } from '../GetDataNew/GetCompanyList';
import FilterTags from '../Forms/FilterTags';
import Footer from '../Footer/Footer';
import Paging from '../Forms/Paging';
import SearchForm from '../Forms/SearchForm';
import { strict } from 'assert';

// import { RouteComponentProps } from 'react-router-dom';
// import { getTopCategoryList } from '../GetData/GetTopCategoryList';
// import { useEffect, useState } from 'react';

// export const UserListing = () => {

class UserListing extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      //   filter: [],
      loading: true,
      companyList: [],
      totalAmountOfCompanies: 0,
      amountOfItemsOnPage: amountOfCompanyItemsInList,
      pageNumber: 1,
      filterCategoryStrings: [],
    };

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleNumberOfEmployeersChange = this.handleNumberOfEmployeersChange.bind(
      this,
    );
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  categoryFilter;
  locationFilter;
  numberFilter;
  typeFilter;
  stringFilter;
  //Создаем массив строк, содержащих названия выбранных фильтров. Если в этой форме ничего не выбрано -
  // добвыляем строку ANY
  Logout() {
    this.props.history.push('/Home');
  }
  createFilterString() {
    let filterString = [''];
    if (this.numberFilter === undefined) {
      filterString.push('Any number of employers');
    } else {
      if (this.numberFilter.length === 0) {
        filterString.push('Any number of employers');
      } else {
        this.numberFilter.forEach((item) => filterString.push(item));
      }
    }

    if (this.locationFilter === undefined) {
      filterString.push('Any location');
    } else {
      if (this.locationFilter.length === 0) {
        filterString.push('Any location');
      } else {
        this.locationFilter.forEach((item) => filterString.push(item));
      }
    }

    if (this.typeFilter === undefined) {
      filterString.push('Any job type');
    } else {
      if (this.typeFilter.length === 0) {
        filterString.push('Any job type');
      } else {
        this.typeFilter.forEach((item) => filterString.push(item));
      }
    }

    filterString.shift();
    this.setState({ filterCategoryStrings: filterString });
  }

  componentWillReceiveProps(nextProps) {
    // new URLSearchParams(this.props.location.search)
    //   nextProps.match.params.skillFilter !==
    //     this.props.match.params.skillFilter
    // );
    if (this.props.location.search !== nextProps.location.search) {
      const searchParams = new URLSearchParams(nextProps.location.search);
      this.ApplyFilters(searchParams);
    }
  }
  async handleFilterSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {});
    let data = await getCompanyList(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.locationFilter,
      this.stringFilter,
      this.numberFilter,
      this.typeFilter,
    );
    this.setState({ companyList: data.companies }, () => {});
    this.setState({ loading: false }, () => {});
    this.setState({ totalAmountOfCompanies: data.totalAmount });
    this.createFilterString();
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;

    this.populateData(
      name,
      this.state.amountOfItemsOnPage,
      this.locationFilter,
      this.typeFilter,
      this.numberFilter,
      this.stringFilter,
    );
    this.setState({ pageNumber: name });
  }

  handleNumberOfEmployeersChange(target) {
    const name = target.value;
    this.numberFilter = createArrayForFilter(name, this.numberFilter);
  }
  handleLocationChange(target) {
    const name = target.name;
    this.locationFilter = createArrayForFilter(name, this.locationFilter);
    // console.log(this.locationFilter);
  }

  handleTypeChange(target) {
    const name = target.name;
    this.typeFilter = createArrayForFilter(name, this.typeFilter);
  }

  handleSearchStringChange(str) {
    console.log(str);
    this.stringFilter = str;
    console.log(this.stringFilter);
  }
  populateData = async (
    pageNumber,
    amountOfItemsOnPage,
    locationFilter,
    typeFilter,
    numberFilter,
    stringFilter,
  ) => {
    // if (this.state.freelancerList.length === 0) {
    const data = await getCompanyList(
      pageNumber,
      amountOfItemsOnPage,
      locationFilter,
      stringFilter,
      numberFilter,
      typeFilter,
    );
    this.setState({ companyList: data.companies }, () => {
      this.setState({ loading: false }, () => {});
      this.setState({ totalAmountOfCompanies: data.totalAmount });
    });
  };
  ApplyFilters(searchParams) {
    let numberFilter_ = (searchParams.get('number') || '').split(',');
    let locationFilter_ = (searchParams.get('location') || '').split(',');
    let typeFilter_ = (searchParams.get('type') || '').split(',');
    let pageNumber = (searchParams.get('page') || '').split(',');
    if (pageNumber[0] === '') {
      this.setState({ pageNumber: 1 });
    } else {
      this.setState({ pageNumber: pageNumber[0] });
    }

    this.numberFilter =
      numberFilter_.indexOf('') === 0 ? numberFilter_.shift() : numberFilter_;
    this.locationFilter =
      locationFilter_.indexOf('') === 0
        ? locationFilter_.shift()
        : locationFilter_;
    this.typeFilter =
      typeFilter_.indexOf('') === 0 ? typeFilter_.shift() : typeFilter_;

    this.createFilterString();

    this.populateData(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      locationFilter_,
      typeFilter_,
      numberFilter_,
    );
    loadScripts1(this.instance, false);
  }

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    this.ApplyFilters(searchParams);
  }

  pagingCreate() {
    if (this.state.companyList !== undefined) {
      console.log(this.state.companyList);
      return (
        <Paging
          linkName="CompanyGrid"
          totalAmountOfItems={this.state.totalAmountOfCompanies}
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  render() {
    let paging =
      this.state.loading !== true ? this.pagingCreate() : <div></div>;
    let resultContent;
    if (this.state.loading === false) {
      let endNumber;
      if (
        this.state.pageNumber * this.state.amountOfItemsOnPage >
        this.state.totalAmountOfCompanies
      ) {
        endNumber =
          this.state.totalAmountOfCompanies >
          this.state.pageNumber * this.state.amountOfItemsOnPage
            ? ' - ' + this.state.totalAmountOfCompanies
            : ' ';
      } else {
        endNumber =
          ' - ' + this.state.pageNumber * this.state.amountOfItemsOnPage;
      }
      resultContent =
        (this.state.pageNumber - 1) * this.state.amountOfItemsOnPage +
        1 +
        endNumber +
        ' of ' +
        this.state.totalAmountOfCompanies +
        ' results';
    } else {
      resultContent = ' 0 results';
    }

    return (
      <div>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/images/favicon.png" rel="icon" type="image/x-icon" />
        {/* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */}
        {/* <LoadClass /> */}
        {/* Wrapper Start */}
        <div ref={(el) => (this.instance = el)}></div>;
        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 Logout={this.Logout} />
            {/*Main Start*/}
            <div className="wt-main wt-haslayout wt-innerbgcolor" id="wt-main">
              <div className="wt-main-section wt-haslayout">
                {/* User Listing Start*/}
                <div className="wt-haslayout">
                  <div className="container">
                    <div className="row">
                      <div
                        className="wt-twocolumns wt-haslayout"
                        id="wt-twocolumns"
                      >
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                          <div className="wt-usersidebaricon">
                            <span className="fa fa-cog wt-usersidebardown">
                              <i />
                            </span>
                          </div>
                          <aside
                            className="wt-sidebar wt-usersidebar"
                            id="wt-sidebar"
                          >
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>Start Your Search</h2>
                              </div>

                              <div className="wt-widgetcontent">
                                <SearchForm
                                  handleSubmit={this.handleSearchStringChange}
                                />
                              </div>
                            </div>
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>Location</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <CountryForm
                                  handleLocationChange={
                                    this.handleLocationChange
                                  }
                                />
                              </div>
                            </div>
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>No. Of Emplyee</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <NumberOfEmployeesForm
                                  handleNumberChange={
                                    this.handleNumberOfEmployeersChange
                                  }
                                />
                              </div>
                            </div>
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>Job Type</h2>
                              </div>
                              <JobTypeForm
                                handleTypeChange={this.handleTypeChange}
                              />
                            </div>

                            <div className="wt-widget wt-applyfilters-holder">
                              <div className="wt-widgetcontent">
                                <div className="wt-applyfilters">
                                  <span>
                                    Click “Apply Filter” to apply latest
                                    <br /> changes made by you.
                                  </span>
                                  <button
                                    className="wt-btn"
                                    onClick={this.handleFilterSubmit}
                                  >
                                    Apply Filters
                                  </button>
                                </div>
                              </div>
                            </div>
                          </aside>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                          <div className="wt-userlistingholder wt-userlisting wt-haslayout">
                            <div className="wt-userlistingtitle">
                              <span>
                                {resultContent}
                                {/* <em>"Logo Design"</em> */}
                              </span>
                            </div>
                            <div className="wt-filterholder">
                              <FilterTags
                                Listing="CompanyGrid"
                                filterCategoryStrings={
                                  this.state.filterCategoryStrings
                                }
                              />
                            </div>
                            <div className="wt-companysinfoholder">
                              <Companies
                                companyList={this.state.companyList}
                                loading={this.state.loading}
                              />
                            </div>
                            <nav className="wt-pagination">{paging}</nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Listing End*/}
              </div>

              {/*Main End*/}
              {/*Footer Start*/}
              <Footer />

              {/*Footer End*/}
            </div>
            {/*Content Wrapper End*/}
          </div>
          {/*Wrapper End*/}
        </div>
      </div>
    );
  }
}
export default UserListing;
