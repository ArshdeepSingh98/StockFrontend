import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import styled from 'styled-components';

const ChatStyle = styled.div`
  .sc-chat-window {
    z-index: 1;
    
    @media (max-width: 1000px) {
      height: 75%;
    }
  }
`;

export default class ChatMini extends Component {
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    return (
        <ChatStyle>
          <Launcher
            agentProfile={{
              teamName: 'Chat Bot',
              imageUrl: 'https://www.gravatar.com/avatar/0000000000000000000000000000000' + this.getRandomIntInclusive(1, 20) + '?d=robohash&f=y'
            }}
            handleClick={this.props.handleClose}
            isOpen={this.props.showChat}
            onMessageWasSent={this._onMessageWasSent.bind(this)}
            messageList={this.state.messageList}
            showEmoji
          />
        </ChatStyle>
    )
  }
}