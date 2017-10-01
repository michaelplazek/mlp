import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
//import { Router, Route, IndexRoute,  } from 'react-router';

import Home from './js/Home';
import App from './js/App';

import 'grommet/grommet-hpinc.min.css';
import './style.css';

let content = document.getElementById('content');
ReactDOM.render(
  <Router>
    <div>
    <Route path="/" component={App}/>
      <Route exact component={Home}/>
    </div>
  </Router>
  , content);
