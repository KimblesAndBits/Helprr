import React, { Component } from 'react';
import { Chat, addResponseMessage, senderPlaceHolder, addResponseChoices } from 'react-chat-popup';

 
class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to the Helprr App!");
    
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    //addResponseMessage("How can we help you?");
    
    if (newMessage === "hi"){
      addResponseChoices({
        text: 'Are you looking to learn or help?',
        choices: [
          {
            text: 'Learn',
            value: 'I need help with something!',
          },
          {
            text: 'Help',
            value: "I wanna help!",
          },
        ],
      })
    }
  else{
    
 
  };

    if (newMessage === "I need help with something!"){
      addResponseMessage("Tell me what you're looking for")
    }
  else{
    
  };
  if (newMessage === "I wanna help!"){
    addResponseChoices({
      text: 'Have you already created an account?',
      choices: [
        {
          text: 'Yes',
          value: 'Duh, take me where I need to go.',
        },
        {
          text: 'No',
          value: "No but I want to!",
        },
      ],
    })
  }
else{
  
};
if (newMessage === "Duh, take me where I need to go."){
  addResponseChoices({
    text: 'Do you want to upload a video or a blog post?',
    choices: [
      {
        text: 'Video',
        value: 'My face was made for the camera',
      },
      {
        text: 'Blog',
        value: "I have a face for radio and writing. Take the camera elsewhere.",
      },
    ],
  })
}
else{

};
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