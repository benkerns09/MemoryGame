import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Jobs from '../src/Jobs';

class App extends Component {

  render() {

    return (
      <div>
        <div className="navbar">
          <Link to="/memory">Memory Game</Link>
          <Link to="/ajax">Jobs</Link>
        </div>
        <Switch>
          <Route path="/memory" component={MemoryGame}/>
          <Route path="/ajax" component={Jobs} />
          <Route path="/" component={MemoryGame} />
        </Switch>
      </div>
      
    );
  }
}

export default App;