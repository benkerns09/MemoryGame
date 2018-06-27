import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3>Match Cards to win</h3>
        </header>
          <h1>MemoryCard</h1>
      </div>
    );
  }
}

export default App;
