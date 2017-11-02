import React, { Component } from "react";

class Message extends Component {
  render() {
    const { type, content, username, color, imgSrc } = this.props;
    if (type === "incomingNotification") {
      return (
        <div className="message system">
          { content }
        </div>
      );
    }
    return (
      <div className="message">
        <span className="message-username" style={{ color }}>{username}</span>
        <span className="message-content">{content} {imgSrc && <img src={imgSrc} className='img-message'/>}</span>

      </div>
    );
  }
}
export default Message;
