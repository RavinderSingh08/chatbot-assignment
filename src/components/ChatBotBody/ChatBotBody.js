import React, { Component } from 'react';
import ChatContent from '../ChatContent/ChatContent';
import ChatList from '../ChatList/ChatList';
import UserProfile from '../UserProfile/UserProfile';
import "./ChatBotBody.css";

export default class ChatBotBody extends Component {
  render() {
    return (
      <div className="chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    )
  }
}
