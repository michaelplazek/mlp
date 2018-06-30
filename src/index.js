import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Grommet } from 'grommet';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Portfolio from './js/screens/Portfolio';
import Resume from './js/screens/Resume';
import Home from './js/screens/Home';
import MasterTerminal from './js/screens/MasterTerminal';

import './style.css';
import rootReducer from './js/reducers';
import Header from './js/components/Header/index';

let content = document.getElementById('content');
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Grommet>
      <Router>
        <div>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route path="/terminal" component={MasterTerminal}/>
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        </div>
      </Router>
    </Grommet>
  </Provider>
,content);
