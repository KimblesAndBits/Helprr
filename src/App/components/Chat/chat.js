import React, { Component } from 'react';
import { Chat, addResponseMessage } from 'react-chat-popup';

 
class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to the Helprr App!");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("How can we help you?");
  }
 
  render() {
    return (
      <div className="App">
        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
    );
  }
}
 
export default App;