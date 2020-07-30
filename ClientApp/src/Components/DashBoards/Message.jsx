import React, { Component } from 'react';
import '../../css/button.css';
import {
  messageIn,
  messageOut,
  messageOpenedIn,
  messageOpenedOut,
} from '../Data/GlobalValues';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      classname: 'lnr lnr-chevron-up',
    };

    this.messageClick = this.messageClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleHiddenChange = this.handleHiddenChange.bind(this);
  }
  messageClick(event) {
    event.preventDefault();
    this.setState({ hidden: !this.state.hidden });
    if (this.state.classname === 'lnr lnr-chevron-up')
      this.setState({ classname: 'lnr lnr-chevron-down' });
    else this.setState({ classname: 'lnr lnr-chevron-up' });
  }

  handleSendFeedback(event, projectId, text, rating) {
    event.preventDefault();
  }

  // messageId: string;
  // text: string;
  // status: string; // 'new', 'opened'
  // date: string;
  // sender: string; //'freelancer', 'customer'

  renderAttachment(att) {
    return (
      <li key={att.iD}>
        <a
          href={att.link}
          className="wt-btn wt-attachmentbtn btn-group"
          key={att.iD}
          style={{ display: 'block' }}
        >
          <i className="lnr lnr-download"></i>
          {att.name}
        </a>
      </li>
    );
  }
  render() {
    const message = this.props.message;
    const hiddenContent = this.state.hidden ? null : (
      <div
        className="wt-historydescription collapse active fade show"
        id="collapseone"
        data-parent="#accordion"
      >
        <div className="wt-description">
          <p>{message.text}</p>
        </div>
      </div>
    );

    let messageImg;
    switch (message.sender) {
      case 'freelancer':
        switch (message.status) {
          case 'new':
            messageImg = messageIn;
            break;
          case 'opened':
            messageImg = messageOpenedIn;
            break;
          default:
            messageImg = messageIn;
            break;
        }
        break;
      case 'customer':
        switch (message.status) {
          case 'new':
            messageImg = messageOut;
            break;
          case 'opened':
            messageImg = messageOpenedOut;
            break;
          default:
            messageImg = messageOut;
            break;
        }
        break;
      default:
        messageImg = messageIn;
        break;
    }

    return (
      <li
        key={message.iD}
        className="collapsed"
        // data-toggle="collapse"
        // data-target="#collapseone"
      >
        <div className="wt-dateandmsg">
          <span>
            <img src={messageImg} alt="message" />
            {message.date}
          </span>
          <span>{message.text.substring(1, 50)}</span>
          <span style={{ width: '15px' }} />

          <div className="wt-rightarea wt-msgbtns">
            <span>
              <button className="wt-btn wt-msgbtn" onClick={this.messageClick}>
                <i className={this.state.classname}></i>
                Message
              </button>
            </span>

            <span style={{ float: 'right' }}>
              <div className="btn-group" style={{ float: 'right' }}>
                <ul>
                  {message.attachments === undefined
                    ? null
                    : message.attachments.map((att) =>
                        this.renderAttachment(att),
                      )}
                </ul>
              </div>
            </span>
          </div>
        </div>
        {hiddenContent}
      </li>
    );
  }
}
export default Message;
