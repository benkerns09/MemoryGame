import React, { Component } from 'react';
import MemoryCard from './MemoryCard.js';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Memory Game</h1>
          <h3>Match Cards to win</h3>
        </header>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
      </div>
    );
  }
}
//^^many different ways to do this. refer to video
export default App;
