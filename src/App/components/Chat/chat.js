import React, { Component } from 'react';
import { Chat, addResponseMessage } from 'react-chat-popup';
import "./Chat.css";


const img = {
  marginLeft: "-30px"
};


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
      
      <div className="icon-background">
        <div className="icon"> 
        <Chat
                     
          handleNewUserMessage={this.handleNewUserMessage}
        />
        </div> 
      </div>    
    );
  }
}
 
export default App;