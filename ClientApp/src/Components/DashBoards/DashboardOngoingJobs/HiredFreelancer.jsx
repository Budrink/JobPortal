import React, { Component } from 'react';
import { PostFeedback } from '../../PostData/PostFeedback';
import { SendMail } from '../../PostDataNew/SendMail';
import { DeleteJob } from '../../PostDataNew/PostData';
import Modal from './modal';
import MessageList from '../MessageList';
// import { loadScripts2 } from '../../Functions/LoadScripts';
import MessageEditor from '../MessageEditor';
import { EmailAttachmentUpload } from '../EmailAttachmentUpload';
import FavouriteButton from '../../Forms/FavouriteButton';
class HiredFreelancer extends Component {
  constructor(props) {
    super(props);
    // Фильтр - это массив, в котором собраны все фильтры

    //  {projectList} = this.props
    this.state = {
      fileList: [],
      rating: 5,
      hidden: true,
      content: '',
    };

    this.handleSendFeedback = this.handleSendFeedback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHiddenChange = this.handleHiddenChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.fileLoaded = this.fileLoaded.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
  }

  async SendMessage(e) {
    e.preventDefault();
    let result = await SendMail(
      localStorage.getItem('userId'),
      this.props.contract.userId,
      this.state.text,
      this.state.fileList,
    );
    if (result === true) {
      //  this.populateData();
    }
  }

  fileLoaded(fileList) {
    this.setState({ fileList: fileList });
  }

  handleEditorChange(content, editor) {
    this.setState({ content });
  }

  handleHiddenChange(event) {
    event.preventDefault();

    this.setState({ hidden: !this.state.hidden });
  }

  handleSendFeedback(event, projectId, text, rating) {
    event.preventDefault();
    PostFeedback(projectId, text, rating);
  }

  handleSubmit(jobId, event) {
    event.preventDefault();
    if (DeleteJob(jobId) === true) {
      this.props.PopulateData();
      return;
    }
  }
  componentDidMount() {
    // loadScripts2(this.instance, false);
  }
  renderContract(data) {
    let contract = data;
    let featuredProjectContent = data.PlusMermber ? (
      <span className="wt-featuredtagcolor3">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    ) : (
      <span className="wt-featuredtag">
        <img
          className="template-content tipso_style"
          alt="featured member"
          src="/images/featured.png"
          data-tipso="Plus Member"
        />
      </span>
    );

    let attachments =
      contract.attachments === undefined ? null : contract.attachments
          .length === 0 ? null : (
        <span>
          {contract.attachments.length} file attached
          {contract.attachments.map((att) => (
            <span key={att.name}>
              <a href={att.link} style={{ color: '#55acee' }}>
                {att.name}
              </a>
            </span>
          ))}
        </span>
      );

    let hiddenContent = this.state.hidden ? null : (
      <div className="wt-dashboardboxcontent wt-jobdetailsholder">
        <div className="wt-rcvproposalholder wt-hiredfreelancer wt-tabsinfo">
          <div className="wt-tabscontenttitle">
            <h2>Hired Freelancer</h2>
          </div>
          <div className="wt-jobdetailscontent">
            <div className="wt-userlistinghold wt-featured wt-proposalitem">
              {featuredProjectContent}
              <figure className="wt-userlistingimg">
                <img
                  src={contract.userPhoto}
                  alt={contract.userName}
                  className="mCS_img_loaded"
                />
              </figure>
              <div className="wt-proposaldetails">
                <div className="wt-contenthead">
                  <div className="wt-title">
                    <div>{contract.userName}</div>
                  </div>
                </div>
                <div className="wt-proposalfeedback">
                  <span className="wt-starsvtwo">
                    <i className="fa fa-star fill"></i>
                  </span>
                  <span className="wt-starcontent">
                    {contract.userRates}/<i>5</i>
                    <em> ({contract.feedbacksCount} Feedback)</em>
                  </span>
                </div>
              </div>

              <div className="wt-rightarea wt-titlewithsearch">
                <form className="wt-formtheme wt-formsearch">
                  <fieldset>
                    <div className="form-group">
                      <span className="wt-select">
                        <select defaultValue={contract.status}>
                          <option value="" disabled="">
                            Project Status
                          </option>
                          <option value="inProgress">in Progress</option>
                          <option value="finished">Finished</option>
                          <option value="canceled">Canceled</option>
                        </select>
                      </span>
                      <a
                        href="#"
                        className="wt-searchgbtn"
                        data-toggle="modal"
                        data-target="#wt-projectmodalbox"
                      >
                        <i className="fa fa-check"></i>
                      </a>
                    </div>
                  </fieldset>
                </form>

                <div className="wt-hireduserstatus">
                  <h5>&#36;30</h5>
                  <span>In 02 Months</span>
                </div>
                <div className="wt-hireduserstatus">
                  <a href={contract.coverLetter}>
                    <i className="far fa-envelope"></i>
                    <span>Cover Letter</span>
                  </a>
                </div>
                <div className="wt-hireduserstatus">
                  <i className="fa fa-paperclip"></i>
                  {attachments}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wt-dashboardboxcontent wt-jobdetailsholder">
          <div className="wt-projecthistory">
            <div className="wt-tabscontenttitle">
              <h2>Project History</h2>
            </div>
            <div className="wt-historycontent">
              <MessageList messages={contract.messages} />
              <form
                className="wt-formtheme wt-userform"
                style={{ width: '100%' }}
              >
                <fieldset>
                  <div className="wt-replaybox">
                    <div style={{ height: '300px' }}>
                      <MessageEditor
                        handleEditorChange={this.handleEditorChange}
                        content={this.state.content}
                      />
                    </div>
                    {/* className="wt-btnsendmsg" */}

                    <EmailAttachmentUpload fileLoaded={this.fileLoaded} />
                    <button className="wt-btn" onClick={this.SendMessage}>
                      Send Now
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <div
        className="wt-dashboardboxcontent wt-jobdetailsholder"
        key={contract.userId}
      >
        {/* <Modal /> */}
        <div className="wt-freelancerholder wt-tabsinfo">
          <div className="wt-tabscontenttitle">
            <h2>Hired Freelancer</h2>
          </div>

          <div className="wt-jobdetailscontent">
            <div className="wt-userlistinghold wt-featured wt-userlistingvtwo">
              {featuredProjectContent}
              <div className="wt-userlistingcontent">
                <div className="wt-contenthead">
                  <div className="wt-title">
                    <button onClick={this.handleHiddenChange}>
                      <i className="fa fa-check-circle"></i>
                      {contract.userName}
                    </button>
                    <h2>Classifieds Posting, Data Entry, Typing</h2>
                  </div>
                  <ul className="wt-userlisting-breadcrumb">
                    <li>
                      <span>
                        <i className="far fa-money-bill-alt"></i> $
                        {contract.hourRates} / hr
                      </span>
                    </li>
                    <li>
                      <span>
                        <img
                          src={contract.country.countryFlag}
                          alt={contract.country.countryName}
                        />
                        {contract.country.countryName}
                      </span>
                    </li>
                    <li>
                      <FavouriteButton
                        saved={contract.saved}
                        itemType="freelancer"
                      />
                      {/* <button href="/" className="wt-clicksave">
                        <i className="fa fa-heart"></i> Save
                      </button> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {hiddenContent}
        </div>
        <Modal
          iD={contract.countractId}
          ratingTex="How was my proffesional behaviour?"
          submitButtontext=" Send Feedback"
        />
      </div>
    );
  }

  render() {
    let contract = this.props.contract;
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderContract(contract)
    );

    return (
      <div
        className="wt-managejobcontent wt-verticalscrollbar"
        // ref={(el) => (this.instance = el)}
      >
        {contents}
      </div>
    );
  }
}
export default HiredFreelancer;
