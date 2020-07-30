import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/bootstrap.min.css';
import '../../../css/normalize.css';
import '../../../css/scrollbar.css';
import '../../../css/fontawesome/fontawesome-all.css';
import '../../../css/font-awesome.min.css';
import '../../../css/themify-icons.css';
import '../../../css/owl.carousel.min.css';
import '../../../css/jquery-ui.css';
import '../../../css/linearicons.css';
import '../../../css/tipso.css';
import '../../../css/chosen.css';
import '../../../css/prettyPhoto.css';
import '../../../css/main.css';
import '../../../css/dashboard.css';
import '../../../css/color.css';
import '../../../css/transitions.css';
import '../../../css/responsive.css';
import '../../../css/dbresponsive.css';
import Header1 from '../../Header/Header1';
import { loadScripts } from '../../Functions/LoadScripts';
import LeftMenu from '../../Header/LeftMenu';
import { GetCorrespondentList } from '../../GetData/GetCorrespondentList';
import Messages from './Messages';
class DashboardMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      correspondentlist: [],
      initialCorrespondentlist: [],
      selectedCorrespondent: undefined,
      textForSearching: '',
      className: 'wt-verticalscrollbar wt-dashboardscrollbar',
    };

    this.chooseCorrespondent = this.chooseCorrespondent.bind(this);
    this.changeSeekText = this.changeSeekText.bind(this);
    this.seekCorrespondent = this.seekCorrespondent.bind(this);
  }

  // className = 'wt-verticalscrollbar wt-dashboardscrollbar';
  chooseCorrespondent(user, e) {
    e.preventDefault();
    this.setState({ selectedCorrespondent: user });
  }

  changeSeekText(e) {
    const value = e.target.value;
    this.setState({ textForSearching: value });
  }

  seekCorrespondent(e) {
    e.preventDefault();
    this.className = '';
    // this.setState({ correspondentlist: [] });
    this.setState({ className: '' });
    const newList = this.state.initialCorrespondentlist.filter(
      (corr) =>
        (corr.firstName + ' ' + corr.lastName).indexOf(
          this.state.textForSearching,
        ) >= 0,
    );

    // this.className = 'wt-verticalscrollbar wt-dashboardscrollbar';
    // console.log(this.className);
    this.setState({ correspondentlist: newList });
    console.log(this.state.correspondentlist);
  }

  populateData = async () => {
    const data = await GetCorrespondentList(localStorage.getItem('userId'));

    if (data !== undefined) {
      if (data.correspondents.length > 0) {
        this.setState({ selectedCorrespondent: data.correspondents[0] });
      }
    }
    this.setState({ correspondentlist: data.correspondents }, () => {
      this.setState({ loading: false });
    });
    this.setState({ initialCorrespondentlist: data.correspondents });
    this.setState({ className: 'wt-verticalscrollbar wt-dashboardscrollbar' });
    loadScripts(this.instance, false);
  };

  componentDidMount() {
    this.populateData();
  }

  CreateFeaturedContent(featured) {
    return featured ? (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : null;
  }

  renderCorrespondent(corr) {
    const classname = corr.newMessages ? 'wt-ad wt-dotnotification ' : 'wt-ad ';
    const style = {
      width: '100%',
      background: '#fcfcfc',
      outline: 'none',
    };
    return (
      <div key={corr.userId} className={classname}>
        <button
          style={style}
          onClick={(e) => this.chooseCorrespondent(corr, e)}
        >
          <figure>
            <img alt={'img'} src={corr.userPhoto} />
          </figure>
          <div className="wt-adcontent">
            <h3>{corr.firstName + ' ' + corr.lastName}</h3>
            <span>{corr.title.substring(0, 30)}</span>
          </div>
        </button>
      </div>
    );
  }

  renderCorrespondentsList() {
    if (this.state.className === '') {
          return (
        <div>
          {this.state.correspondentlist.map((corr) =>
            this.renderCorrespondent(corr),
          )}
        </div>
      );
    }
    return (
      <div className="wt-dashboardscrollbar">
        {this.state.correspondentlist.map((corr) =>
          this.renderCorrespondent(corr),
        )}
      </div>
    );
  }

  renderSelectedCorrespondent() {
    const corr = this.state.selectedCorrespondent;
    const feateredContent = this.CreateFeaturedContent(corr.plusMember);
    return (
      <div className="wt-dashboardbox wt-messagebox">
        {feateredContent}
        <div className="wt-dashboardboxcontent">
          <div className="wt-userprofile">
            <figure>
              <img alt="img" src={corr.userPhoto} />
              <div className="wt-userdropdown wt-online"></div>
            </figure>
            <div className="wt-title">
              <h3>
                <i className="fa fa-check-circle" />{' '}
                {corr.firstName + '    ' + corr.lastName}
              </h3>
              <span>
                {corr.userRates}/5 <a>({corr.feedbacksCount} Feedback)</a>
                <br />
                Member since {corr.joinDate} <br />
                {/* <a href="javascript:void(0);">@valentine20658</a> */}
              </span>
            </div>
          </div>
          <div className="wt-applyfilters">
            <span>{corr.title}</span>
            <Link className="wt-btn" to={`/UserSingle/${corr.userId}`}>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
  render() {
    let correspondents = !this.state.loading
      ? this.renderCorrespondentsList()
      : null;
    let selectCorr = !this.state.loading
      ? this.renderSelectedCorrespondent()
      : null;
    let content = !this.state.loading ? (
      <div className="wt-login">
        <title>Messages</title>

        <div className="wt-wrapper wt-haslayout" id="wt-wrapper">
          {/* Content Wrapper Start */}
          <div className="wt-contentwrapper">
            {/* Header Start */}
            <Header1 />
            <div id="wt-main" className="wt-main wt-haslayout">
              <LeftMenu />
              {/*Register Form Start*/}
              <section className="wt-haslayout wt-dbsectionspace">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-9">
                    <div className="wt-dashboardbox wt-messages-holder">
                      <div className="wt-dashboardboxtitle">
                        <h2>Messages</h2>
                      </div>
                      <div className="wt-dashboardboxcontent wt-dashboardholder wt-offersmessages">
                        <ul>
                          <li>
                            <form className="wt-formtheme wt-formsearch">
                              <fieldset>
                                <div className="form-group">
                                  <input
                                    name="Location"
                                    className="form-control"
                                    type="text"
                                    placeholder="Search Here"
                                    onChange={(e) => this.changeSeekText(e)}
                                  />
                                  <button
                                    className="wt-searchgbtn"
                                    onClick={(e) => this.seekCorrespondent(e)}
                                  >
                                    <i className="lnr lnr-magnifier" />
                                  </button>
                                </div>
                              </fieldset>
                            </form>
                            <div>{correspondents}</div>
                          </li>
                          <li>
                            <Messages
                              userId={this.state.selectedCorrespondent.userId}
                              userPhoto={
                                this.state.selectedCorrespondent.userPhoto
                              }
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                    {selectCorr}
                  </div>
                </div>
              </section>

              {/*Register Form End*/}

              {/*Main End*/}
            </div>
          </div>
          {/*Content Wrapper End*/}
        </div>
        {/*Wrapper End*/}
      </div>
    ) : (
      <div>Loading ...</div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}

export default DashboardMessages;
