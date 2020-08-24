import React, { PureComponent } from 'react';
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
import { GetPopularArticleCategoryList } from '../GetData/GetPopularArticleCategoryList';
import { GetPopularArticleList } from '../GetData/GetPopularArticleList';
import { GetPopularArticleTags } from '../GetData/GetPopularArticleTags';
import Header1 from '../Header/Header1';
import loadScripts1 from '../Functions/LoadScripts';
import { GetArticles } from '../GetData/GetArticles';
import Footer from '../Footer/Footer';
import Paging from '../Forms/Paging';

class UserClassic extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      //   filter: [],
      loading: true,
      articleList: [],
      amountOfItemsOnPage: amountOfArticleItemsInList,
      pageNumber: 1,
      categories: [],
      categoryFilter: '',
      stringFilter: '',
      tagList: [],
      popularArticleList: [],
    };

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleStringFilterChange = this.handleStringFilterChange.bind(this);
    this.Logout = this.Logout.bind(this);
    this.LoginSuccessfull = this.LoginSuccessfull.bind(this);
  }

  Logout() {
    this.props.history.push('/Home');
  }
  LoginSuccessfull() {
    this.props.history.push('/');
  }

  handleStringFilterChange(e) {
    const value = e.target.value;
    this.setState({ stringFilter: value });
  }

  async handleFilterSubmit(event) {
    event.preventDefault();
    this.setState({ loading: true }, () => {});
    let data = await GetArticles(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.state.categoryFilter,
      this.state.stringFilter,
    );
    this.setState({ articleList: data }, () => {});
    this.setState({ loading: false }, () => {});
  }

  handlePageChange(event) {
    let target = event.target;
    const name = target.name;
    this.setState({ pageNumber: name });
    this.populateData =
      (this.pageNumber,
      this.amountOfItemsOnPage,
      this.statecategoryFilter,
      this.state.stringFilter);
  }

  populateData = async (
    pageNumber,
    amountOfItemsOnPage,
    categoryFilter,
    stringFilter,
  ) => {
    let categories = await GetPopularArticleCategoryList();
    this.setState({ categories: categories });

    let tagList = await GetPopularArticleTags();
    this.setState({ tagList: tagList });

    let popularArticleList = await GetPopularArticleList();
    this.setState({ popularArticleList: popularArticleList });

    const data = await GetArticles(
      pageNumber,
      amountOfItemsOnPage,
      categoryFilter,
      stringFilter,
    );
    this.setState({ articleList: data }, () => {
      this.setState({ loading: false }, () => {});
      loadScripts1(this.instance, false);

      // this.fullfreelancerList = this.state.freelancerList; //this.state.freelancerList;
    });
    // }
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    let pageNumber = searchParams.get('page') || '';
    let stringFilter_ = searchParams.get('string') || '';
    let categoryFilter_ = searchParams.get('category') || '';
    if (pageNumber[0] === '') {
      this.setState({ pageNumber: 1 });
    } else {
      this.setState({ pageNumber: pageNumber[0] });
    }
    this.setState({ stringFilter: stringFilter_ });
    this.setState({ categoryFilter: categoryFilter_ });
    //  stringFilter_.indexOf('') === 0 ? stringFilter_.shift() : stringFilter_;
    // console.log(locationFilter_);
    // console.log(categoryFilter_);
    this.populateData(
      this.state.pageNumber,
      this.state.amountOfItemsOnPage,
      this.categoryFilter_,
      this.stringFilter_,
    );
  }

  pagingCreate() {
    if (this.state.articleList !== undefined) {
      return (
        <Paging
          linkName="ArticleClassic"
          totalAmountOfItems={this.state.articleList.totalAmountOfArticles}
          amountOfItemsOnPage={this.state.amountOfItemsOnPage}
          pageNumber={this.state.pageNumber}
          onClick={this.handlePageChange}
        />
      );
    } else return null;
  }

  renderCategories() {
    return this.state.categories.map((cat) => (
      <li key={cat.categoryId}>
        <a href={`/ArticleClassic/?category=${cat.categoryName}`}>
          {cat.categoryName} <em>{cat.itemsAmount}</em>
        </a>
      </li>
    ));
  }

  renderTags() {
    return this.state.tagList.map((tag) => (
      <a href={`/ArticleClassic/?category=${tag.tagName}`} key={tag.tagId}>
        {tag.tagName}
      </a>
    ));
  }
  renderPopularAticles() {
    console.log(this.state.popularArticleList);
    return this.state.popularArticleList.map((article) => (
      <div className="wt-particlehold" key={article.articleId}>
        <figure>
          <img
            src={article.articleImg}
            alt="description"
            style={({ width: '30px' }, { height: '50px' })}
          />
        </figure>
        <div className="wt-particlecontent">
          <h3>
            <a href={`/ArticleSingle/:${article.articleId}`}>
              {article.articleName}
            </a>
          </h3>
          <span>
            <i className="lnr lnr-clock"></i> {article.date}
          </span>
        </div>
      </div>
    ));
  }
  renderArticle(article) {
    return (
      <div className="wt-article" key={article.articleId}>
        <figure>
          <img src={article.articleClassicImg} alt="img description" />
        </figure>
        <div className="wt-articlecontent">
          <div className="wt-title">
            <Link to={`/ArticleSingle/${article.articleId}`}>
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
    );
  }
  renderArticles() {
    return this.state.articleList.articles.map((article) =>
      this.renderArticle(article),
    );
  }
  render() {
    let content = this.state.loading ? null : (
      <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
        {/* <!-- Content Wrapper Start --> */}
        <div className="wt-contentwrapper">
          {/* Header Start */}
          <Header1 Logout={this.Logout} Login={this.LoginSuccessfull} />
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

          {/*Main Start*/}
          <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
            {/* <!--Two Columns Start--> */}
            <div className="wt-haslayout wt-main-section">
              <div className="container">
                <div className="row">
                  <div
                    id="wt-twocolumns"
                    className="wt-twocolumns wt-haslayout"
                  >
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 float-left">
                      <aside id="wt-sidebar" className="wt-sidebar">
                        <div className="wt-widget wt-startsearch">
                          <div className="wt-widgettitle">
                            <h2>Start Your Search</h2>
                          </div>
                          <div className="wt-widgetcontent">
                            <form className="wt-formtheme wt-formsearch">
                              <fieldset>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="Search"
                                    className="form-control"
                                    placeholder="Search Company"
                                    onChange={this.handleStringFilterChange}
                                  />
                                  <button
                                    onClick={this.handleFilterSubmit}
                                    className="wt-searchgbtn"
                                  >
                                    <i className="lnr lnr-magnifier"></i>
                                  </button>
                                </div>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                        <div className="wt-widget wt-categoriesholder">
                          <div className="wt-widgettitle">
                            <h2>Categories</h2>
                          </div>
                          <div className="wt-widgetcontent">
                            <ul className="wt-categoriescontent">
                              {this.renderCategories()}
                            </ul>
                          </div>
                        </div>
                        <div className="wt-widget wt-widgetarticlesholder">
                          <div className="wt-widgettitle">
                            <h2>Popular Articles</h2>
                          </div>
                          <div className="wt-widgetcontent">
                            {this.renderPopularAticles()}
                          </div>
                        </div>
                        <div className="wt-widget wt-widgettagshold">
                          <div className="wt-widgettitle">
                            <h2>Frequent Tags</h2>
                          </div>
                          <div className="wt-widgetcontent">
                            <div className="wt-widgettag">
                              {this.renderTags()}
                            </div>
                          </div>
                        </div>
                      </aside>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-8 float-left">
                      <div className="wt-classicaricle-holder">
                        <div className="wt-classicaricle-header">
                          <div className="wt-title">
                            <h2>Our Latest Articles</h2>
                          </div>
                          <div className="wt-description">
                            <p>
                              Consectetur adipisicing elit sed dotem eiusmod
                              tempor incunetion labore etdolore maigna aliqua
                              enim poskina ilukita ylokem lokateise ination.
                            </p>
                          </div>
                        </div>
                        <div className="wt-article-holder">
                          {this.renderArticles()}
                        </div>
                        {this.pagingCreate()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Two Columns End--> */}
          </main>
          {/*Main End*/}
          {/*Footer Start*/}
          <Footer />

          {/*Footer End*/}
        </div>
      </div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}
export default UserClassic;
