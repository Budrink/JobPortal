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
import { amountOfFreelancersItemsInList } from '../Data/GlobalValues';
import Header1 from '../Header/Header1';
import CategoryForm from '../Forms/Category/CategoryForm';
import CountryForm from '../Forms/CountryForm';
import RateForm from '../Forms/RateForm';
import UserTypeForm from '../Forms/User/UserTypeForm';
import EnglishLevelForm from '../Forms/EnglishLevelForm';
import LanguagesForm from '../Forms/LanguagesForm';
import CategoriesSlider from '../Forms/Category/CategoriesSlider';
import loadScripts1 from '../Functions/LoadScripts';
import FreelancerList from '../Forms/User/FreelancerList';
import { createArrayForFilter } from '../Functions/createArrayForFilter';
import { getFreelancerList } from '../GetDataNew/GetFreelancerList';
import FilterTags from '../Forms/FilterTags';
import Footer from '../Footer/Footer';
import Paging from '../Forms/Paging';
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
      freelancerList: [],
      amountOfItemsOnPage: amountOfFreelancersItemsInList,
      pageNumber: 1,
      filterCategoryStrings: [],
    };

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleRateChange = this.handleRateChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  skillFilter;
  locationFilter;
  typeFilter;
  levelFilter;
  langFilter;
  rateFilter;
  stringFilter;
  globalCategoryFilter;
  Logout() {
    this.props.history.push('/Home');
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

  createFilterString() {
    let filterString = [''];
    if (this.skillFilter === undefined) {
      filterString.push('Any category');
    } else {
      if (this.skillFilter.length === 0) {
        filterString.push('Any category');
      } else {
        this.skillFilter.forEach((item) => filterString.push(item));
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
      filterString.push('Any freelancer type');
    } else {
      if (this.typeFilter.length === 0) {
        filterString.push('Any freelancer type');
      } else {
        this.typeFilter.forEach((item) => filterString.push(item));
      }
    }
    if (this.levelFilter === undefined) {
      filterString.push('Any English level');
    } else {
      if (this.levelFilter.length === 0) {
        filterString.push('Any English level');
      } else {
        this.levelFilter.forEach((item) => filterString.push(item));
      }
    }
    if (this.langFilter === undefined) {
      filterString.push('Any language');
    } else {
      if (this.langFilter.length === 0) {
        filterString.push('Any language');
      } else {
        this.langFilter.forEach((item) => filterString.push(item));
      }
    }
    if (this.rateFilter === undefined) {
      filterString.push('Any hourly rate');
    } else {
      if (this.rateFilter.length === 0) {
        filterString.push('Any hourly rate');
      } else {
        this.rateFilter.forEach((item) => filterString.push(item));
      }
    }

    filterString.shift();
    this.setState({ filterCategoryStrings: filterString });
  }
  async handleFilterSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {});
    let data = await getFreelancerList(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.skillFilter,
      this.locationFilter,
      this.typeFilter,
      this.levelFilter,
      this.langFilter,
      this.rateFilter,
      this.stringFilter,
      this.globalCategoryFilter,
    );
    this.setState({ freelancerList: data }, () => {});
    this.setState({ loading: false }, () => {});
    this.createFilterString();
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData =
      (this.pageNumber,
      this.amountOfItemsOnPage,
      this.skillFilter,
      this.locationFilter,
      this.typeFilter,
      this.levelFilter,
      this.langFilter,
      this.rateFilter,
      this.stringFilter,
      this.globalCategoryFilter);
  }
  handleRateChange(target) {
    const name = target.name;
    this.rateFilter = createArrayForFilter(name, this.rateFilter);
  }
  handleCategoryChange(target) {
    const name = target.name;
    this.skillFilter = createArrayForFilter(name, this.skillFilter);
  }
  handleLocationChange(target) {
    const name = target.name;
    this.locationFilter = createArrayForFilter(name, this.locationFilter);
  }

  handleTypeChange(target) {
    const name = target.name;
    this.typeFilter = createArrayForFilter(name, this.typeFilter);
  }

  handleLevelChange(target) {
    const name = target.name;
    this.levelFilter = createArrayForFilter(name, this.levelFilter);
  }

  handleLangChange(target) {
    const name = target.name;
    this.langFilter = createArrayForFilter(name, this.langFilter);
  }

  populateData = async (
    pageNumber,
    amountOfItemsOnPage,
    skillFilter,
    locationFilter,
    typeFilter,
    levelFilter,
    langFilter,
    rateFilter,
    stringFilter,
    globalCategoryFilter,
  ) => {
    // if (this.state.freelancerList.length === 0) {

    const data = await getFreelancerList(
      pageNumber,
      amountOfItemsOnPage,
      skillFilter,
      locationFilter,
      typeFilter,
      levelFilter,
      langFilter,
      rateFilter,
      stringFilter,
      globalCategoryFilter,
    );
    // console.log(JSON.stringify(data));
    this.setState({ freelancerList: data }, () => {
      this.setState({ loading: false }, () => {});
      loadScripts1(this.instance, false);

      // this.fullfreelancerList = this.state.freelancerList; //this.state.freelancerList;
    });
    // }
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    this.ApplyFilters(searchParams);
  }

  ApplyFilters(searchParams) {
    this.createFilterString();

    let skillFilter_ = (searchParams.get('skillFilter') || '').split(',');
    let locationFilter_ = (searchParams.get('location') || '').split(',');
    let typeFilter_ = (searchParams.get('type') || '').split(',');
    let levelFilter_ = (searchParams.get('level') || '').split(',');
    let langFilter_ = (searchParams.get('lang') || '').split(',');
    let rateFilter_ = (searchParams.get('rate') || '').split(',');
    let pageNumber = (searchParams.get('page') || '').split(',');
    let stringFilter_ = searchParams.get('string') || ''; //.split(',');

    let globalCategoryFilter_ = searchParams.get('globalCategory'); //|| ''.split(',');
    if (pageNumber[0] === '') {
      this.setState({ pageNumber: 1 });
    } else {
      this.setState({ pageNumber: pageNumber[0] });
    }
    this.skillFilter =
      skillFilter_.indexOf('') === 0 ? skillFilter_.shift() : skillFilter_;
    this.locationFilter =
      locationFilter_.indexOf('') === 0
        ? locationFilter_.shift()
        : locationFilter_;
    this.typeFilter =
      typeFilter_.indexOf('') === 0 ? typeFilter_.shift() : typeFilter_;
    this.levelFilter =
      levelFilter_.indexOf('') === 0 ? levelFilter_.shift() : levelFilter_;
    this.langFilter =
      langFilter_.indexOf('') === 0 ? langFilter_.shift() : langFilter_;
    this.rateFilter =
      rateFilter_.indexOf('') === 0 ? rateFilter_.shift() : rateFilter_;
    this.stringFilter = stringFilter_;
    this.globalCategoryFilter = globalCategoryFilter_;
    //  stringFilter_.indexOf('') === 0 ? stringFilter_.shift() : stringFilter_;
    // console.log(locationFilter_);
    this.createFilterString();

    this.populateData(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      skillFilter_,
      locationFilter_,
      typeFilter_,
      levelFilter_,
      langFilter_,
      rateFilter_,
      stringFilter_,
      globalCategoryFilter_,
    );
  }

  pagingCreate() {
    if (this.state.freelancerList.freelancerList !== undefined) {
      return (
        <Paging
          linkName="UserListing"
          totalAmountOfItems={
            this.state.freelancerList.freelancerList.totalAmountOfFreelancers
          }
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  render() {
    let paging = this.pagingCreate();
    let resultContent;
    if (this.state.loading === false) {
      let endNumber;
      if (
        this.state.pageNumber * this.state.amountOfItemsOnPage >
        this.state.freelancerList.freelancerList.totalAmountOfFreelancers
      ) {
        endNumber =
          this.state.freelancerList.freelancerList.totalAmountOfFreelancers >
          this.state.pageNumber * this.state.amountOfItemsOnPage
            ? ' - ' +
              this.state.freelancerList.freelancerList.totalAmountOfFreelancers
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
        this.state.freelancerList.freelancerList.totalAmountOfFreelancers +
        ' results';
    } else {
      resultContent = ' 0 results';
    }
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/images/favicon.png" rel="icon" type="image/x-icon" />
        {/* <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script> */}
        {/* <LoadClass /> */}
        {/* Wrapper Start */}
        <div ref={(el) => (this.instance = el)}></div>
        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 Logout={this.Logout} />

            {/*Header End*/}
            {/*Inner Home Banner Start*/}
            <div className="wt-haslayout wt-innerbannerholder">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                    <div className="wt-innerbannercontent">
                      <div className="wt-title">
                        <h2>Search Result</h2>
                      </div>
                      <ol className="wt-breadcrumb">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li className="wt-active">Freelancers</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="wt-categoriesslider-holder wt-haslayout">
              <div className="wt-title">
                <h2>Browse Top Job Categories:</h2>
              </div>
              <div
              // id="wt-categoriesslider"
              //  className="wt-categoriesslider owl-carousel"
              >
                <CategoriesSlider />
              </div>
            </div>

            {/*Inner Home End*/}
            {/*Main Start*/}
            <main className="wt-main wt-haslayout wt-innerbgcolor" id="wt-main">
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
                                <h2>Categories</h2>
                              </div>

                              <div className="wt-widgetcontent">
                                <CategoryForm
                                  handleCategoryChange={
                                    this.handleCategoryChange
                                  }
                                  id="categoryForm"
                                  name="categoryForm"
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
                                <h2>Hourly Rate</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <div className="wt-widgetcontent">
                                  <RateForm
                                    handleRateChange={this.handleRateChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>Freelancer Type</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <UserTypeForm
                                  handleTypeChange={this.handleTypeChange}
                                />
                              </div>
                            </div>
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>English level</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <EnglishLevelForm
                                  handleLevelChange={this.handleLevelChange}
                                />
                              </div>
                            </div>
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>Languages</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <LanguagesForm
                                  handleLangChange={this.handleLangChange}
                                />
                              </div>
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
                                Listing="UserListing"
                                filterCategoryStrings={
                                  this.state.filterCategoryStrings
                                }
                              />
                            </div>
                            <FreelancerList
                              freelancerList={this.state.freelancerList}
                              loading={this.state.loading}
                            />
                            <nav className="wt-pagination">{paging}</nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* User Listing End*/}
              </div>
            </main>
            {/*Main End*/}
            {/*Footer Start*/}
            <Footer />

            {/*Footer End*/}
          </div>
          {/*Content Wrapper End*/}
        </div>
        {/*Wrapper End*/}
      </div>
    );
  }
}
export default UserListing;
