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
import Header1 from '../Header/Header1';
import Footer from '../Footer/Footer';
import loadScripts1 from '../Functions/LoadScripts';
import { GetArticle } from '../GetData/GetArticle';
import ArticleEditor from './ArticleEditor';
class ArticleSingle extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      article: '',
      loading: true,
    };
  }
  handleEditorChange(content, editor) {
    this.setState({ content });
  }
  iD = this.props.match.params.articleId;
  // iD = this.props.params.userId;
  // iD = 4;
  //We got the first time the first feedbacks
  populateData = async (iD) => {
    const data = await GetArticle(this.iD);
    this.setState({ article: data }, () => {});
    this.setState({ loading: false }, () => {});
    console.log(data);
    // loadScripts1(this.instance, false);
  };

  componentDidMount() {
    this.populateData();
  }

  renderTags() {
    return this.state.article.tags.map((tag) => (
      <Link to="/ArticleGrid" key={tag}>
        {tag}
      </Link>
    ));
  }
  render() {
    // console.log(this.state.article.text);
    let content = !this.state.loading ? (
      <div id="wt-wrapper" className="wt-wrapper wt-haslayout">
        {/* <!-- Content Wrapper Start --> */}
        <div className="wt-contentwrapper">
          {/* <!-- Header Start --> */}
          <Header1 />
          {/* <!--Header End-->
			<!--Inner Home Banner Start--> */}
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
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/ArticleGrid">Articles</Link>
                      </li>
                      <li className="wt-active">Article Detail</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--Inner Home End-->
			<!--Main Start--> */}
          <main id="wt-main" className="wt-main wt-haslayout wt-innerbgcolor">
            {/* <!--Categories Start--> */}
            <div className="wt-haslayout wt-main-section">
              <div className="container">
                <div className="row justify-content-md-center">
                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left">
                    <div className="wt-articlesingle-holder wt-bgwhite">
                      <div className="wt-articlesingle-content">
                        <figure className="wt-singleimg-one">
                          <img
                            src={this.state.article.articleImg}
                            alt="img description"
                          />
                        </figure>
                        <div className="wt-title">
                          <h2>{this.state.article.title}</h2>
                        </div>
                        <ul className="wt-postarticlemeta">
                          <li>
                            <a>
                              <i className="lnr lnr-calendar-full"></i>
                              <span> {this.state.article.date}</span>
                            </a>
                          </li>
                          <li>
                            <Link
                              to={`/UserSingle/${this.state.article.author.userId}`}
                            >
                              <i className="lnr lnr-user"></i>
                              <span> {this.state.article.author.userName}</span>
                            </Link>
                          </li>
                          <li>
                            <a href="javascript.html">
                              <i className="lnr lnr-tag"></i>
                              <span>
                                {this.state.article.category.globalCategoryName}
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="javascript.html">
                              <i className="lnr lnr-bug"></i>
                              <span>Report Post</span>
                            </a>
                          </li>
                        </ul>
                        <div className="wt-description">
                          <ArticleEditor
                            content={this.state.article.text}
                          ></ArticleEditor>
                          {/* <textarea
                            id="articleArea"
                            defaultValue={this.state.article.text}
                          ></textarea> */}
                        </div>

                        <div className="wt-tagsshare">
                          <div className="wt-tag wt-widgettag">
                            <span>Tags:</span>
                            {this.renderTags()}
                          </div>
                          <ul className="wt-socialiconssimple wt-blogsocialicons">
                            <li className="wt-sharejob">
                              <span>Share this blog</span>
                            </li>
                            <li className="wt-facebook">
                              <a href="javascript.html">
                                <i className="fa fa-facebook-f"></i>
                              </a>
                            </li>
                            <li className="wt-twitter">
                              <a href="javascript.html">
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li className="wt-linkedin">
                              <a href="javascript.html">
                                <i className="fab fa-linkedin-in"></i>
                              </a>
                            </li>
                            <li className="wt-clone">
                              <a href="javascript.html">
                                <i className="far fa-clone"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="wt-author">
                          <div className="wt-authordetails">
                            <figure>
                              <Link
                                to={`/UserSingle/${this.state.article.author.userId}`}
                              >
                                <img
                                  src={this.state.article.author.userPhoto}
                                  alt="description"
                                />
                              </Link>
                            </figure>
                            <div className="wt-authorcontent">
                              <div className="wt-authorhead">
                                <div className="wt-boxleft">
                                  <h3>
                                    <Link
                                      to={`/UserSingle/${this.state.article.author.userId}`}
                                    >
                                      {this.state.article.author.firstName +
                                        ' ' +
                                        this.state.article.author.lastName}
                                    </Link>
                                  </h3>
                                  <span>
                                    <i className="lnr lnr-clock"></i> Author
                                    Since: {this.state.article.author.since}
                                  </span>
                                </div>
                                <div className="wt-boxright">
                                  <ul className="wt-socialiconssimple">
                                    <li className="wt-facebook">
                                      <a href="javascript.html">
                                        <i className="fa fa-facebook-f"></i>
                                      </a>
                                    </li>
                                    <li className="wt-twitter">
                                      <a href="javascript.html">
                                        <i className="fab fa-twitter"></i>
                                      </a>
                                    </li>
                                    <li className="wt-linkedin">
                                      <a href="javascript.html">
                                        <i className="fab fa-linkedin-in"></i>
                                      </a>
                                    </li>
                                    <li className="wt-googleplus">
                                      <a href="javascript.html">
                                        <i className="fab fa-google"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="wt-description">
                                <p>{this.state.article.author.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div id="wt-comments" className="wt-comments">
                          <h2>03 Comments</h2>
                          <ul>
                            <li>
                              <div className="wt-author">
                                <div className="wt-authordetails">
                                  <figure>
                                    <a href="javascript.html">
                                      <img
                                        src="/images/author/img-02.jpg"
                                        alt="description"
                                      />
                                    </a>
                                  </figure>
                                  <div className="wt-authorcontent">
                                    <div className="wt-authorhead">
                                      <div className="wt-boxleft">
                                        <h3>
                                          <a href="javascript.html">
                                            Shameka Mccarter
                                          </a>
                                        </h3>
                                        <span>01 Min Ago</span>
                                      </div>
                                      <div className="wt-boxright">
                                        <a
                                          className="wt-btnreply"
                                          href="javascript.html"
                                        >
                                          <span className="wt-clickreply">
                                            Click To Reply
                                          </span>
                                          <i className="fa fa-mail-reply"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="wt-description">
                                      <p>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt inlpa officia deserunt
                                        molliteu animeta idestrume Sed
                                        utaiciatis unde omnis iste natus error
                                        sitame voluptatem accusntium dolorem
                                        aquesim laudaiumin totam rem aiam eaque
                                        ipsa quae abillointore veritatis et
                                        quasi architecto eibeatae vitae dictaan
                                        suntise explicabo nemo enim ipsam
                                        voluptatem quia voluptas.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ul className="wt-child">
                                <li>
                                  <div className="wt-author">
                                    <div className="wt-authordetails">
                                      <figure>
                                        <a href="javascript.html">
                                          <img
                                            src="/images/author/img-03.jpg"
                                            alt="description"
                                          />
                                        </a>
                                      </figure>
                                      <div className="wt-authorcontent">
                                        <div className="wt-authorhead">
                                          <div className="wt-boxleft">
                                            <h3>
                                              <a href="javascript.html">
                                                Floyd Miranda
                                              </a>
                                            </h3>
                                            <span>03 Days Ago</span>
                                          </div>
                                          <div className="wt-boxright">
                                            <a
                                              className="wt-btnreply"
                                              href="javascript.html"
                                            >
                                              <span className="wt-clickreply">
                                                Click To Reply
                                              </span>
                                              <i className="fa fa-mail-reply"></i>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="wt-description">
                                          <p>
                                            Excepteur sint occaecat cupidatat
                                            non proident, sunt inlpatiume
                                            officia deserunt molliteu animeta
                                            idestrume Sed utaiciatis unde omnis
                                            iste natus error sitame voluptatem
                                            accuium dolorem aquesim laudaiumin
                                            totam rem aiam.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="wt-author">
                                <div className="wt-authordetails">
                                  <figure>
                                    <a href="javascript.html">
                                      <img
                                        src="/images/author/img-04.jpg"
                                        alt="description"
                                      />
                                    </a>
                                  </figure>
                                  <div className="wt-authorcontent">
                                    <div className="wt-authorhead">
                                      <div className="wt-boxleft">
                                        <h3>
                                          <a href="javascript.html">
                                            Joshua Krom
                                          </a>
                                        </h3>
                                        <span>02 Years Ago</span>
                                      </div>
                                      <div className="wt-boxright">
                                        <a
                                          className="wt-btnreply"
                                          href="javascript.html"
                                        >
                                          <span className="wt-clickreply">
                                            Click To Reply
                                          </span>
                                          <i className="fa fa-mail-reply"></i>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="wt-description">
                                      <p>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt inlpa officia deserunt
                                        molliteu animeta idestrume Sed
                                        utaiciatis unde omnis iste natus error
                                        sitame voluptatem accusntium dolorem
                                        aquesim laudaiumin totam rem aiam eaque
                                        ipsa quae abillointore veritatis et
                                        quasi architecto eibeatae vitae dictaan
                                        suntise explicabo nemo enim ipsam
                                        voluptatem quia voluptas.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="wt-commentsbtn">
                            <button className="wt-btn" type="button">
                              Load More
                            </button>
                          </div>
                        </div> */}

                        {/* <div className="wt-replaybox">
                          <h2>Leave Your Comment</h2>
                          <form className="wt-formtheme wt-formleavecomment">
                            <fieldset>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Name*"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="email"
                                  name="email"
                                  className="form-control"
                                  placeholder="Email*"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="Phone"
                                  className="form-control"
                                  placeholder="Phone"
                                />
                              </div>
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="Subect"
                                  className="form-control"
                                  placeholder="Subect*"
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  placeholder="Message*"
                                ></textarea>
                              </div>
                              <div className="form-group">
                                <button className="wt-btn" type="submit">
                                  Send
                                </button>
                              </div>
                            </fieldset>
                          </form>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Limitless Experience End--> */}
          </main>
          {/* <!--Main End-->
			<!--Footer Start--> */}
          <Footer />
          {/* <!--Footer End--> */}
        </div>
        {/* <!--Content Wrapper End--> */}
      </div>
    ) : (
      <div>Loading ...</div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}
export default ArticleSingle;
