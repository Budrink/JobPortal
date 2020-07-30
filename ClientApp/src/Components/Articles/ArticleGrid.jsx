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
import { amountOfArticleItemsInList } from '../Data/GlobalValues';
import Header1 from '../Header/Header1';
import loadScripts1 from '../Functions/LoadScripts';
import { GetArticles } from '../GetData/GetArticles';
import Footer from '../Footer/Footer';
import Paging2 from '../Forms/Paging2';
// import { RouteComponentProps } from 'react-router-dom';
// import { getTopCategoryList } from '../GetData/GetTopCategoryList';
// import { useEffect, useState } from 'react';

// export const UserListing = () => {

class ArticleGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   filter: [],
      loading: true,
      articleList: [],
      amountOfItemsOnPage: amountOfArticleItemsInList,
      pageNumber: 1,
      filterCategoryStrings: [],
      stringFilter: '',
      linkString: '/ArticleList/',
    };

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  stringFilter;
  globalCategoryFilter;
  Logout() {
    this.props.history.push('/Home');
  }

  async handleFilterSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {});
    let data = await GetArticles(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.globalCategoryFilter,
      this.stringFilter,
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
      this.globalCategoryFilter,
      this.stringFilter);
  }

  populateData = async (
    pageNumber,
    amountOfItemsOnPage,
    globalCategoryFilter,
    stringFilter,
  ) => {
    // if (this.state.freelancerList.length === 0) {
    const data = await GetArticles(
      pageNumber,
      amountOfItemsOnPage,
      globalCategoryFilter,
      stringFilter,
    );
    // console.log(JSON.stringify(data));
    this.setState({ articleList: data }, () => {
      this.setState({ loading: false }, () => {});
      loadScripts1(this.instance, false);

      // this.fullfreelancerList = this.state.freelancerList; //this.state.freelancerList;
    });
    // }
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    let pageNumber = (searchParams.get('page') || '').split(',');
    let stringFilter_ = (searchParams.get('string') || '').split(',');
    let globalCategoryFilter_ = (searchParams.get('category') || '').split(',');
    if (pageNumber[0] === '') {
      this.setState({ pageNumber: 1 });
    } else {
      this.setState({ pageNumber: pageNumber[0] });
    }
    this.stringFilter = stringFilter_;
    this.globalCategoryFilter = globalCategoryFilter_;
    this.populateData(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.globalCategoryFilter,
      this.stringFilter,
    );
    let linkString =
      this.globalCategoryFilter === undefined
        ? ''
        : this.state.linkString + '?category=' + this.globalCategoryFilter;
    this.setState({ linkString: linkString });
    console.log(linkString);
  }
  renderArticle(article) {
    return (
      <div
        className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4"
        key={article.articleId}
      >
        <div className="wt-article">
          <figure>
            <img src={article.articleGridImg} alt="img description" />
          </figure>
          <div className="wt-articlecontent">
            <div className="wt-title">
              <Link to={`/ArticleSingle/:${article.articleId}`}>
                <h2>{article.title}</h2>
              </Link>
            </div>
            <ul className="wt-postarticlemeta">
              <li>
                <a>
                  <i className="lnr lnr-clock"></i>
                  <span> {article.date}</span>
                </a>
              </li>
              <li>
                <Link to={`/UserSingle/${article.author.userId}`}>
                  <i className="lnr lnr-user"></i>
                  <span>{article.author.userName}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  renderArticles() {
    return this.state.articleList.articles.map((article) =>
      this.renderArticle(article),
    );
  }
  pagingCreate() {
    let content = (
      <li>
        <a href={this.state.linkString}>
          <i className="fa fa-th"></i>
        </a>
      </li>
    );

    if (this.state.articleList.articles !== undefined) {
      return (
        <Paging2
          linkName="ArticleList"
          totalAmountOfItems={this.state.articleList.totalAmountOfArticles}
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
          InternalContent={content}
        />
      );
    } else return null;
  }

  render() {
    let paging = this.pagingCreate();

    let content = this.state.loading ? null : (
      <div className="wt_main wt-haslayout wt-innerbgcolor">
        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 Logout={this.Logout} />
            <div className="wt-haslayout wt-innerbannerholder">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-xs-12 col-sm-12 col-md-8 push-md-2 col-lg-6 push-lg-3">
                    <div className="wt-innerbannercontent">
                      <div className="wt-title">
                        <h2>New Articles</h2>
                      </div>
                      <ol className="wt-breadcrumb">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li className="wt-active">Articles</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
              {/* <!--Categories Start--> */}
              <div className="wt-haslayout wt-main-section">
                <div className="container">
                  <div className="row justify-content-md-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                      <div className="wt-articletabshold wt-articlelist">
                        <ul
                          className="wt-navarticletab"
                          style={
                            ({ display: 'flex' },
                            { flexDirection: 'row' },
                            { justifyContent: 'center' })
                          }
                        >
                          <li>
                            <a href="/ArticleList">All</a>
                          </li>
                          <li>
                            <a href="/ArticleList/?category=Business">
                              Business
                            </a>
                          </li>
                          <li>
                            <a href="/ArticleList/?category=Trading">Trading</a>
                          </li>
                          <li className="nav-item">
                            <a href="/ArticleList/?category=Economics">
                              Economics
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="/ArticleList/?category=Marketing">
                              Marketing
                            </a>
                          </li>
                        </ul>

                        <div className="tab-content wt-haslayout">
                          <div
                            className="wt-contentarticle tab-pane active fade show"
                            id="alltab"
                          >
                            <div className="row">
                              <div className="row">{this.renderArticles()}</div>
                            </div>
                          </div>
                          <nav className="wt-pagination">{paging}</nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Footer Start*/}
            <Footer />

            {/*Footer End*/}
          </div>
          {/*Content Wrapper End*/}
        </div>
      </div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}
export default ArticleGrid;
