import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

import tempData from './tempData.json';
class App extends Component {

  constructor(props){

    super(props)
    this.state = tempData

    this.submitMessage = this.submitMessage.bind(this)
  }

  submitMessage(message) {
    const { username, content } = message
    const tempMsgs = this.state.messages
    tempMsgs.push({
      id: Math.random()*100000,
      username: username || "Anonymous",
      content
    })
    this.setState( {
      messages: tempMsgs
    })
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages= { this.state.messages}/>
        <ChatBar currentUser= { this.state.currentUser} submitMessage = { this.submitMessage }/>
      </div>  
    );
  }
}
export default App;
