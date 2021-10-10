import React from 'react';
import './App.css';
import ChatBotBody from './components/ChatBotBody/ChatBotBody';
import Nav from './components/Nav/Nav';
// import ChatBot from './components/ChatBot/ChatBot';

function App() {
  return (
    <div className="App">
      <Nav />
      <ChatBotBody />
    </div>
  );
}

export default App;
