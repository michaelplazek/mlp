import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import { Grommet } from 'grommet';

import Portfolio from './js/screens/Portfolio';
import Resume from './js/screens/Resume';
import Home from './js/screens/Home/index';
import MasterTerminal from './js/screens/MasterTerminal';
import App from './js/App';

import './style.css';

let content = document.getElementById('content');
ReactDOM.render(
  <Grommet>
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route exact path='/home' component={Home}/>
        <Route path="/terminal" component={MasterTerminal}/>
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  </Grommet>
  , content);
