import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messagesArray = this.props.messages.map( message => {
      return <Message 
        key = { message.id}
        content= {message.content}
        username = {message.username} />
    })
    return (
      <main className="messages">
        { messagesArray }
    </main>
    );
  }
}
export default MessageList;
