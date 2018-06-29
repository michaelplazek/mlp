import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { CssBaseline } from '@material-ui/core';

import rootReducer from './reducers';

import Header from './components/Header';

const store = createStore(rootReducer);

const App = (props) => (
  <Provider store={store}>
    <CssBaseline>
      <div id="app-container">
        <Header />
        {props.children}
      </div>
    </CssBaseline>
  </Provider>
);

export default App;
