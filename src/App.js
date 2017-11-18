import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBubble from 'react-chat-bubble';
import YouAvatar from './static/avatarYou.png';
import caseManager from './static/caseManager.jpg';

class App extends Component {
  state = {
    messages: []
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <ChatBubble messages={this.state.messages}
                        onNewMessage={(msg) => {
                          let messages = this.state.messages;
                          if(this.state.messages.length % 2 === 0){
                            messages.push({
                              image: YouAvatar,
                              text: msg,
                              type: 0
                            });
                          }
                          else{
                            messages.push({
                              image: caseManager,
                              text: msg,
                              type: 1
                            });
                          }
                          this.setState({messages});
                        }}/>
          </div>
        </div>
    );
  }
}

export default App;
