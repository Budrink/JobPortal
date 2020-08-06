import React from 'react';
import { GetMessages } from '../../GetData/GetMessages';
import { SendMail } from '../../PostData/SendMail';
import { loadScripts } from '../../Functions/LoadScripts';
class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      messageList: [],
      content: 'Message text here',
    };

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.SendMessage = this.SendMessage.bind(this);
  }
  userId = localStorage.getItem('userId');
  userPhoto = localStorage.getItem('userPhoto');

  async SendMessage(e) {
    e.preventDefault();

    let result = await SendMail(
      // this.userId,
      this.props.correspondentId,
      this.state.content,
    );
    if (result === true) {
      this.populateData();
    }
  }
  handleEditorChange(e) {
    //   console.log(e.target.value);
    this.setState({ content: e.target.value });
  }

  populateData = async () => {
    const data = await GetMessages(this.props.correspondentId);

    this.setState({ messagelist: data }, () => {
      this.setState({ loading: false });
    });

    // loadScripts(this.instance, false);
  };

  componentDidMount() {
    this.populateData();
  }

  // createMessageWindow(message, proposalId) {
  //   if (this.state.showMessage === proposalId) {
  //     // this.setState({ showMessage: '' });
  //     return (
  //       <Modal isOpen={true}>
  //         <h2>Cover message</h2>
  //         <div>{message}</div>
  //         {/* <button onClick={() => this.closeWindowPortal()}>Close</button> */}
  //       </Modal>
  //     );
  //   } else return null;
  // }

  renderMessage(message) {
    let className;
    let img;
    if (message.senderId === this.userId) {
      className = 'wt-memessage wt-readmessage';
      img = this.userPhoto;
    } else {
      className = 'wt-offerermessage';
      img = this.props.correspondentPhoto;
    }
    let checkContent = null;
    if (message.status === 'opened') {
      checkContent = <div className="clearfix" />;
    }
    return (
      // console.log(img);
      <div className={className} key={message.messageId}>
        <figure>
          <img alt="img" src={img} />
        </figure>
        <div className="wt-description">
          <p>{message.text}</p>
          {checkContent}
          <time dateTime="2017-08-08">{message.date}</time>
          {checkContent}
        </div>
      </div>
    );
  }

  renderMessages() {
    if (this.state.messagelist === undefined) {
      return <div></div>;
    } else {
      return this.state.messagelist.map((message) =>
        this.renderMessage(message),
      );
    }
  }

  render() {
    let messages = !this.state.loading ? this.renderMessages() : null;
    let content = !this.state.loading ? (
      <div className="wt-chatarea">
        <div className="wt-messages wt-verticalscrollbar wt-dashboardscrollbar">
          {messages}
        </div>
        <div className="wt-replaybox">
          <div className="form-group">
            <textarea
              onChange={(e) => this.handleEditorChange(e)}
              className="form-control"
              name="reply"
              placeholder="Type message here"
            ></textarea>
          </div>
          <div className="wt-iconbox">
            <button
              className="wt-btnsendmsg"
              onClick={(e) => this.SendMessage(e)}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div>Loading ...</div>
    );
    return <div ref={(el) => (this.instance = el)}>{content}</div>;
  }
}

export default Messages;
