import React, {Component} from 'react';


class ChatBar extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      content: ''
    }
  }

  onUserChange = (name) => {
    this.setState({
      username:name.target.value
    })
  }
  
  onMessage = (msg) => {
    this.setState({
      content: msg.target.value
    })
  }

  submitNewMessage = (event) => {
    if (event.key === "Enter") {
      this.props.submitMessage(this.state)
      this.setState({content: ''})
    }
  }

  render() {

    return (
    <footer className="chatbar">  
      <input className="chatbar-username" placeholder="Your Name (Optional)" onChange={this.onUserChange} value={ this.state.username} />
      <input className="chatbar-message" 
        placeholder="Type a message and hit ENTER" 
        onKeyDown= { this.submitNewMessage }
          onChange={this.onMessage}
          value={ this.state.content}/>
    </footer>
    );
  }
}
export default ChatBar