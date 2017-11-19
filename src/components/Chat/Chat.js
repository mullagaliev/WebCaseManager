import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChatBubble from 'react-chat-bubble';
import ClientAvatar from '../../static/avatarYou.png';
import YouAvatar from '../../static/caseManager.jpg';
import {Segment} from 'semantic-ui-react';
import io from 'socket.io-client';

class Chat extends Component {
  state = {
    messages: []
  };
  socket = io.connect('bffa28e5.ngrok.io', {path: '/ws_hub'});
  componentDidMount() {
    // io.on('connection', function (data) {
      this.socket.emit('say', { msg: 'world' });
    //   this.socket.on('my other event', function (data) {
    //     console.log(data);
    //   });
    // });
  }
  render() {
    return (
        <div>
          <h1 className="Title">Диалог с пациентом {this.props.user}</h1>
          <Segment>
            <ChatBubble messages={this.state.messages}
                        onNewMessage={(msg) => {
                          let messages = this.state.messages;
                          if (this.state.messages.length % 2 === 0) {
                            messages.push({
                              image: YouAvatar,
                              text: msg,
                              type: 0
                            });
                          }
                          else {
                            messages.push({
                              image: ClientAvatar,
                              text: msg,
                              type: 1
                            });
                          }
                          this.setState({messages});
                        }}/>
          </Segment>
        </div>
    );
  }
}

Chat.propTypes = {};
Chat.defaultProps = {};

export default Chat;
