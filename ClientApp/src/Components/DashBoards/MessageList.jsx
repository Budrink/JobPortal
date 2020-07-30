import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    let messageContent =
      this.props.messages !== undefined
        ? this.props.messages.map((message) => (
            <Message message={message} key={message.messageId} />
          ))
        : null;

    return (
      <ul id="accordion" className="wt-historycontentcol">
        {messageContent}
      </ul>
    );
  }
}
export default MessageList;
