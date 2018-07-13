import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//.js is implied here
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App  /></BrowserRouter>, document.getElementById('root'));//no html tag called App. This comes from the import above. This is where the component is rendered

registerServiceWorker();
