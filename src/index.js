import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './js/screens/Home';
import MasterTerminal from './js/screens/MasterTerminal';
import App from './js/App';

import './style.css';

let content = document.getElementById('content');
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route exact component={Home}/>
      <Route path="/terminal" component={MasterTerminal}/>
    </div>
  </Router>
  , content);
