import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { amountOfFeedbackOnPage } from '../../Data/GlobalValues';
import { reduxForm } from 'redux-form';
import { GetFeedbackList } from '../../GetData/GetFeedBackList';
import '../../../css/rating.css';
//import { array } from 'prop-types';
class ClientFeedBackList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      feedbacks:
        this.props.feedbackList !== undefined ? this.props.feedbackList : [],
      iD: '',
      value: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      iD:
        this.state.feedbacks.length === 0
          ? undefined
          : this.state.feedbacks.userFeedbacks[0].freelancerId,
    });
  }
  // Fmount of feedbacks shown on page (== amountOfFeedbackOnPage but can be changed by button ShowMore )
  shownFeedBacksAmount = amountOfFeedbackOnPage;

  /// нужно добавить паджинацию
  qualificationContent(qualification) {
    // this.setState;
    if (qualification === 'Beginner') {
      return (
        <span>
          <i className="fa fa-dollar-sign"></i>
          Beginner
        </span>
      );
    } else {
      if (qualification === 'Intermediate') {
        return (
          <span>
            <i className="fa fa-dollar-sign"></i>
            <i className="fa fa-dollar-sign"></i>
            Intermediate
          </span>
        );
      } else {
        return (
          <span>
            <i className="fa fa-dollar-sign"></i>
            <i className="fa fa-dollar-sign"></i>
            <i className="fa fa-dollar-sign"></i>
            Professional
          </span>
        );
      }
    }
  }

  calendarContent(feedback) {
    if (feedback.contract.status === 'InProgress') {
      return (
        <span>
          <i className="fas fa-spinner fa-spin"></i>
          InProgress
        </span>
      );
    } else {
      if (feedback.contract.endDate !== undefined)
        return (
          <span>
            <i className="far fa-calendar"></i>
            {feedback.contract.beginDate} -{feedback.contract.endDate}
          </span>
        );
      else
        return (
          <span>
            <i className="far fa-calendar"></i>
            {feedback.contract.beginDate}
          </span>
        );
    }
  }

  renderFeedback(data) {
    const qualificationContent = this.qualificationContent(
      data.feedback.contract.job.qualification,
    );

    const calendarContent = this.calendarContent(data.feedback);

    //The rating stars for feedback
    let style = ['', '', '', '', ''];
    if (data.feedback.mark !== undefined) {
      for (let i = 0; i < data.feedback.mark; i++) {
        style[i] = 'active';
      }
    }
    return (
      <div className="wt-userlistinghold wt-userlistingsingle wt-bgcolor">
        <figure className="wt-userlistingimg">
          <img
            src={data.feedback.contract.job.company.companyImgPng}
            alt={data.feedback.contract.job.company.companyName}
          />
        </figure>
        <div className="wt-userlistingcontent">
          <div className="wt-contenthead">
            <div className="wt-title">
              <Link
                to={`/CompanySingle/${data.feedback.contract.job.company.companyId}`}
              >
                <i className="fa fa-check-circle"></i>
                {data.feedback.contract.job.company.companyName}
              </Link>
              <h3>{data.feedback.contract.job.title}</h3>
            </div>
            <ul className="wt-userlisting-breadcrumb">
              <li>{qualificationContent}</li>
              <li>
                <span>
                  <img
                    src={data.feedback.contract.job.company.country.countryFlag}
                    alt={data.feedback.contract.job.company.country.countryName}
                  />
                  {data.feedback.contract.job.company.country.сountryName}
                </span>
              </li>
              <li>{calendarContent}</li>
              {/* <li> */}
              <div className="rating-mini">
                <span className={style[0]}></span>
                <span className={style[1]}></span>
                <span className={style[2]}></span>
                <span className={style[3]}></span>
                <span className={style[4]}></span>
              </div>
            </ul>
          </div>
        </div>
        <div className="wt-description">
          <p>“ {data.feedback.text} ”</p>
        </div>
      </div>
    );
  }

  renderTable(feedbacks) {
    if (feedbacks !== undefined) {
      return feedbacks.map((feedback) => (
        <div className="form-group" key={feedback.feedbackId}>
          {this.renderFeedback({ feedback })}
        </div>
      ));
    } else return <div> No feedback </div>;
  }

  createPagesOptions() {
    const theLastPageNumber = Math.ceil(
      this.props.feedbacksAmount / amountOfFeedbackOnPage,
    );
    //The numbers array
    let arr = [];
    for (let i = 1; i <= theLastPageNumber; i++) {
      arr.push(i);
    }
    let content = arr.map((a) => (
      <option key={'Page ' + a} value={'' + a}>
        {'Page ' + a}
      </option>
    ));
    let pageSelect = (
      <select
        // onClick={this.props.newFeedbackOptions}
        onChange={this.handleChange}
        defaultValue="1"
      >
        <option value="0" key="0">
          Show All
        </option>

        {content}
      </select>
    );
    return pageSelect;
  }
  async handleChange(event) {
    //Return to initial state of amount of feedbacks on page
    this.shownFeedBacksAmount = amountOfFeedbackOnPage;
    const value = event.target.value;
    let feedbacks;
    if (value !== '0') {
      feedbacks = await GetFeedbackList(
        this.state.iD,
        amountOfFeedbackOnPage,
        value,
      );
      this.setState({ feedbacks: feedbacks });
    } else {
      feedbacks = await GetFeedbackList(
        this.state.iD,
        this.props.feedbacksAmount,
        1,
      );

      this.setState({ feedbacks: feedbacks });
    }
  }
  async btnClick(event) {
    event.preventDefault();
    this.shownFeedBacksAmount =
      this.shownFeedBacksAmount + amountOfFeedbackOnPage;
    let feedbacks = await GetFeedbackList(
      this.state.iD,
      this.shownFeedBacksAmount,
      this.state.value,
    );
    this.setState({ feedbacks: feedbacks });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : this.state.feedbacks !== undefined ? (
      this.renderTable(this.state.feedbacks.userFeedbacks)
    ) : null;
    let pagesSelect = this.createPagesOptions();

    let buttonContent =
      this.state.value * amountOfFeedbackOnPage >= this.shownFeedBacksAmount ? (
        <div></div>
      ) : (
        <button className="wt-btn" onClick={this.btnClick}>
          Load More
        </button>
      );

    return (
      <form className="wt-clientfeedback" ref={(el) => (this.instance = el)}>
        <div
          className="wt-usertitle wt-titlewithselect"
          ref={(el) => (this.instance = el)}
        >
          <h2>Client Feedback</h2>
          <div className="form-group">
            <span className="wt-select">{pagesSelect}</span>
          </div>
        </div>
        {contents}
        <div className="wt-btnarea">
          {/* <button className="wt-btn" onClick={this.btnClick}>
            Load More
          </button> */}
          {buttonContent}
        </div>
      </form>
    );
  }
}

export default ClientFeedBackList;
