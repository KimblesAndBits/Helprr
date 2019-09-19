import React, { Component } from 'react';

// import PostTutorial from '../Posting/Post';
import "./Chat.css";
import { Chat, addResponseMessage, senderPlaceHolder, addResponseChoices } from 'react-chat-popup';

var delayInMilliseconds = 2000; //2 second



class App extends Component {
  componentDidMount() {    
    addResponseMessage("Welcome to Helprr!");

  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    //addResponseMessage("How can we help you?");
    
    if (newMessage === "hi"){
      setTimeout(function() {
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
    }, delayInMilliseconds);
    }
  else{
    
 
  };

    if (newMessage === "I need help with something!"){
      setTimeout(function() {
      addResponseMessage("Tell me what you're looking for")
    }, delayInMilliseconds);
    }
  else{
    
  };
  if (newMessage === "I wanna help!"){
    setTimeout(function() {
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
    });
  }, delayInMilliseconds);
  }
else{
  
};
if (newMessage === "Duh, take me where I need to go."){
  setTimeout(function() {
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
}, delayInMilliseconds);
}
else{

};
// if (newMessage === "My face was made for the camera"){
//   PostTutorial
  
// }, delayInMilliseconds);
// }
// else{


// };
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