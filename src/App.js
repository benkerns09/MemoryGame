import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import MemoryGame from './MemoryGame.js';
import Jobs from './Jobs.js';

class App extends Component {

  render() {
    console.log('hi');
    return (
      <div>
        <div className="navbar">
          <Link to="/memory">Memory Game</Link>
          <Link to="/Jobs">Jobs</Link>
        </div>
        <Switch>
          <Route path="/memory" component={MemoryGame}/>
          <Route path="/jobs" component={Jobs} />
          <Route exact path="/" component={MemoryGame} />
        </Switch>
      </div>
      
    );
  }
}

export default App;