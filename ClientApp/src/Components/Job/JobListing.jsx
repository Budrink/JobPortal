import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
import { amountOfProjectItemsInList } from '../Data/GlobalValues';
import Header1 from '../Header/Header1';
import CategoryForm from '../Forms/Category/CategoryForm';
import CountryForm from '../Forms/CountryForm';
import LanguagesForm from '../Forms/LanguagesForm';
import ProjectTypeForm from './ProjectTypeForm';
import UserTypeForm from '../Forms/User/UserTypeForm';
import { loadScripts } from '../Functions/LoadScripts';
import ProjectList from './ProjectList';
import { createArrayForFilter } from '../Functions/createArrayForFilter';
import { GetProjectList } from '../GetDataNew/GetProjectList';
import FilterTags from '../Forms/FilterTags';
import Footer from '../Footer/Footer';
import Paging from '../Forms/Paging';
import DurationForm from '../Forms/DurationForm';

// import { RouteComponentProps } from 'react-router-dom';
// import { getTopCategoryList } from '../GetData/GetTopCategoryList';
// import { useEffect, useState } from 'react';

// export const UserListing = () => {

class JobListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   filter: [],
      loading: true,
      projectList: [],
      amountOfItemsOnPage: amountOfProjectItemsInList,
      pageNumber: 1,
      filterCategoryStrings: [],
      minPrice: 0,
      maxPrice: 150,
      typeProject: 'Any Project Type',
      resultString: '',
    };

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleProjectLengthChange = this.handleProjectLengthChange.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  categoryFilter;
  locationFilter;
  typeFilter;
  skillFilter;
  langFilter;
  projectLengthFilter;
  companyFilter;
  stringFilter;
  statusFilter;
  //Создаем массив строк, содержащих названия выбранных фильтров. Если в этой форме ничего не выбрано -
  // добвыляем строку ANY
  Logout() {
    this.props.history.push('/Home');
  }
  createFilterString() {
    let filterString = [''];
    if (this.categoryFilter === undefined) {
      filterString.push('Any category');
    } else {
      if (this.categoryFilter.length === 0) {
        filterString.push('Any category');
      } else {
        this.categoryFilter.forEach((item) => filterString.push(item));
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

    // if (this.typeFilter === undefined) {
    //   filterString.push('Any freelancer type');
    // } else {
    //   if (this.typeFilter.length === 0) {
    //     filterString.push('Any freelancer type');
    //   } else {
    //     this.typeFilter.forEach((item) => filterString.push(item));
    //   }
    // }
    if (this.state.typeProject === 'Any Project Type')
      this.typeFilter = this.state.typeProject;
    else {
      this.typeFilter =
        this.state.typeProject +
        ' ' +
        this.state.minPrice +
        '$-' +
        this.state.maxPrice +
        '$';
    }

    filterString.push(this.typeFilter);
    if (this.skillFilter === undefined) {
      filterString.push('Any skill');
    } else {
      if (this.projectTypeFilter.length === 0) {
        filterString.push('Any skill');
      } else {
        this.skillFilter.forEach((item) => filterString.push(item));
      }
    }
    // if (this.skillFilter === undefined) {
    //   filterString.push('Any skill');
    // } else {
    //   if (this.skillFilter.length === 0) {
    //     filterString.push('Any skill');
    //   } else {
    //     this.skillFilter.forEach((item) => filterString.push(item));
    //   }
    // }

    if (this.langFilter === undefined) {
      filterString.push('Any language');
    } else {
      if (this.langFilter.length === 0) {
        filterString.push('Any language');
      } else {
        this.langFilter.forEach((item) => filterString.push(item));
      }
    }
    if (this.projectLengthFilter === undefined) {
      filterString.push('Any project length');
    } else {
      if (this.projectLengthFilter.length === 0) {
        filterString.push('Any project length');
      } else {
        this.projectLengthFilter.forEach((item) => filterString.push(item));
      }
    }

    filterString.shift();
    this.setState({ filterCategoryStrings: filterString });
  }
  async handleFilterSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {});
    let data = await GetProjectList(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.categoryFilter,
      this.projectTypeFilter,
      this.locationFilter,
      this.typeFilter,
      this.projectLengthFilter,
      this.langFilter,
      this.companyFilter,
      this.stringFilter,
      this.statusFilter,
    );
    this.setState({ projectList: data }, () => {});
    this.setState({ loading: false }, () => {});
    this.createFilterString();
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData(
      this.pageNumber,
      this.amountOfItemsOnPage,
      this.categoryFilter,
      this.projectTypeFilter,
      this.locationFilter,
      this.typeFilter,
      this.projectLengthFilter,
      this.langFilter,
      this.companyFilter,
      this.stringFilter,
      this.statusFilter,
    );
  }

  handleCategoryChange(target) {
    const name = target.name;
    this.categoryFilter = createArrayForFilter(name, this.categoryFilter);
  }
  handleLocationChange(target) {
    const name = target.name;
    this.locationFilter = createArrayForFilter(name, this.locationFilter);
  }

  handlePriceChange(event) {
    this.setState({ minPrice: event[0] });
    this.setState({ maxPrice: event[1] });
  }

  handleSkillChange(target) {
    const name = target.name;
    this.skillFilter = createArrayForFilter(name, this.SkillFilter);
  }

  handleTypeChange(target) {
    const name = target.value;
    this.setState({ typeProject: name });
  }

  handleProjectLengthChange(target) {
    const name = target.name;
    this.projectLengthFilter = createArrayForFilter(
      name,
      this.projectLengthFilter,
    );
  }

  handleLangChange(target) {
    const name = target.name;
    this.langFilter = createArrayForFilter(name, this.langFilter);
  }

  populateData = async (
    pageNumber,
    amountOfItemsOnPage,
    categoryFilter,
    projectTypeFilter,
    locationFilter,
    typeFilter,
    projectLengthFilter,
    langFilter,
    companyFilter,
    stringFilter,
    statusFilter,
  ) => {
    let data = [];

    if (localStorage.getItem('login') === 'true') {
      data = await GetProjectList(
        pageNumber,
        amountOfItemsOnPage,
        categoryFilter,
        projectTypeFilter,
        locationFilter,
        typeFilter,
        projectLengthFilter,
        langFilter,
        companyFilter,
        stringFilter,
        statusFilter,
      );
    } else {
      data = {
        totalAmountOfProjects: 0,
        projects: [],
      };
    }
    this.setState({ projectList: data }, () => {
      this.setState({ loading: false }, () => {});
      // console.log(data);
      loadScripts(this.instance, false);
      const firstResult =
        (this.state.pageNumber - 1) * this.state.amountOfItemsOnPage + 1;
      const lastResult =
        this.state.pageNumber * this.state.amountOfItemsOnPage >
        this.state.projectList.projectList.totalAmountOfProjects
          ? this.state.projectList.projectList.totalAmountOfProjects
          : this.state.pageNumber * this.state.amountOfItemsOnPage;
      this.setState({
        resultString:
          'Items ' +
          firstResult +
          ' - ' +
          lastResult +
          ' of ' +
          this.state.projectList.projectList.totalAmountOfProjects +
          ' results',
      });
      // this.fullfreelancerList = this.state.freelancerList; //this.state.freelancerList;
    });

    // }
  };

  componentDidMount() {
    // loadScripts1(this.instance, false);

    this.createFilterString();
    console.log(this.props.match.params);
    if (this.props.match.params.length !== 0) {
      // console.log(this.props.match.params);
      this.stringFilter = this.props.match.params.stringForSearching;
    } else this.stringFilter = '';
    const searchParams = new URLSearchParams(this.props.location.search);
    let categoryFilter_ = (searchParams.get('category') || '').split(',');
    let locationFilter_ = (searchParams.get('location') || '').split(',');
    let projectTypeFilter_ = (searchParams.get('projectType') || '').split(',');
    let typeFilter_ = (searchParams.get('type') || '').split(',');
    let projectLengthFilter_ = (searchParams.get('length') || '').split(',');
    let langFilter_ = (searchParams.get('lang') || '').split(',');
    let pageNumber = (searchParams.get('page') || '').split(',');
    let companyFilter_ = (searchParams.get('company') || '').split(',');
    let statusFilter_ = (searchParams.get('status') || '').split(',');

    if (pageNumber[0] === '') {
      this.setState({ pageNumber: 1 });
    } else {
      this.setState({ pageNumber: pageNumber[0] });
    }
    console.log(companyFilter_);
    this.categoryFilter =
      categoryFilter_.indexOf('') === 0
        ? categoryFilter_.shift()
        : categoryFilter_;
    this.locationFilter =
      locationFilter_.indexOf('') === 0
        ? locationFilter_.shift()
        : locationFilter_;
    this.projectTypeFilter =
      typeFilter_.indexOf('') === 0
        ? projectTypeFilter_.shift()
        : projectTypeFilter_;
    this.typeFilter =
      typeFilter_.indexOf('') === 0 ? typeFilter_.shift() : typeFilter_;
    this.projectLengthFilter =
      projectLengthFilter_.indexOf('') === 0
        ? projectLengthFilter_.shift()
        : projectLengthFilter_;
    this.langFilter =
      langFilter_.indexOf('') === 0 ? langFilter_.shift() : langFilter_;
    this.companyFilter =
      companyFilter_.indexOf('') === 0
        ? companyFilter_.shift()
        : companyFilter_;
    this.statusFilter =
      statusFilter_.indexOf('') === 0 ? statusFilter_.shift() : statusFilter_;
    this.createFilterString();
    this.populateData(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      categoryFilter_,
      projectTypeFilter_,
      locationFilter_,
      typeFilter_,
      projectLengthFilter_,
      langFilter_,
      companyFilter_,
      this.stringFilter,
      statusFilter_,
    );
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
  pagingCreate() {
    if (this.state.projectList.projectList !== undefined) {
      return (
        <Paging
          linkName="JobListing"
          totalAmountOfItems={
            this.state.projectList.projectList.totalAmountOfProjects
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
    let projectContent =
      localStorage.getItem('login') === 'true' ? (
        this.state.loading !== true ? (
          <ProjectList
            projectList={this.state.projectList}
            loading={this.state.loading}
          />
        ) : (
          <div>Loading....</div>
        )
      ) : (
        <div> Authorization required </div>
      );
    let pagingContent =
      localStorage.getItem('login') === 'true' ? (
        <nav className="wt-pagination">{paging}</nav>
      ) : (
        <div></div>
      );

    return (
      <div ref={(el) => (this.instance = el)}>
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>

        {/* //    <body className="wt-login"> */}
        <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
          {/* <!-- Content Wrapper Start --> */}
          <div className="wt-contentwrapper" id="wt-contentwrapper">
            {/* <!-- Header Start --> */}
            <Header1 Logout={this.Logout} />
            {/* <!--Header End-->
			<!--Inner Home Banner Start--> */}
            <div
              className="wt-haslayout wt-innerbannerholder"
              id="wt-haslayout wt-innerbannerholder"
            >
              <div className="container" id="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                    <div className="wt-innerbannercontent">
                      <div className="wt-title">
                        <h2>Search Result</h2>
                      </div>
                      <ol className="wt-breadcrumb">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li className="wt-active">Job</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Inner Home End-->
			<!--Main Start--> */}
            <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
              <div className="wt-haslayout wt-main-section" id="0">
                {/* <!-- User Listing Start--> */}
                <div className="wt-haslayout" id="1">
                  <div className="container" id="2">
                    <div className="row" id="3">
                      <div
                        id="wt-twocolumns"
                        className="wt-twocolumns wt-haslayout"
                      >
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                          <aside id="wt-sidebar" className="wt-sidebar">
                            <div className="wt-widget wt-effectiveholder">
                              <div className="wt-widgettitle">
                                <h2>Categories</h2>
                              </div>
                              <div
                                className="wt-widgetcontent"
                                id="CategoryForm"
                              >
                                <CategoryForm
                                  handleCategoryChange={
                                    this.handleCategoryChange
                                  }
                                  id="categoryForm"
                                  name="categoryForm"
                                />
                              </div>
                            </div>
                            <div
                              className="wt-widget wt-effectiveholder"
                              id="ProjectTypeForm"
                            >
                              <div className="wt-widgettitle">
                                <h2>Project Type</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <ProjectTypeForm
                                  handleTypeProjectChange={
                                    this.handleTypeChange
                                  }
                                  handleProjectPriceChange={
                                    this.handlePriceChange
                                  }
                                />
                              </div>
                            </div>
                            <div
                              className="wt-widget wt-effectiveholder"
                              id="Location"
                            >
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
                            <div
                              className="wt-widget wt-effectiveholder"
                              id="Skills"
                            >
                              <div className="wt-widgettitle">
                                <h2>Skills required</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <UserTypeForm
                                  handleTypeChange={this.handleTypeChange}
                                />
                              </div>
                            </div>
                            <div
                              className="wt-widget wt-effectiveholder"
                              id="Length"
                            >
                              <div className="wt-widgettitle">
                                <h2>Project Length</h2>
                              </div>
                              <div className="wt-widgetcontent">
                                <DurationForm
                                  handleDurationChange={
                                    this.handleProjectLengthChange
                                  }
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
                            <div className="wt-widget wt-effectiveholder">
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
                          <div className="wt-userlistingholder wt-haslayout">
                            <div className="wt-userlistingtitle">
                              <span>
                                {this.state.resultString}
                                {/* for{' '} */}
                                {/* <em>"PHP Developer"</em> */}
                              </span>
                            </div>
                            <div className="wt-filterholder">
                              <FilterTags
                                Listing="JobListing"
                                filterCategoryStrings={
                                  this.state.filterCategoryStrings
                                }
                              />
                            </div>
                            {/* <ProjectList
                              projectList={this.state.projectList}
                              loading={this.state.loading}
                            />
                            <nav className="wt-pagination">{paging}</nav> */}
                            {projectContent}
                            {pagingContent}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- User Listing End--> */}
              </div>
            </main>
            {/* <!--Main End-->
		          	<!--Footer Start--> */}
            {/* <Footer /> */}
            <Footer />
            {/* <!--Footer End--> */}
          </div>
          {/* <!--Content Wrapper End--> */}
        </div>
        {/* <!--Wrapper End--> */}
        {/* </body> */}
      </div>
    );
  }
}
export default JobListing;
