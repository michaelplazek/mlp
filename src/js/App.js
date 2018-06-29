import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers';

import Header from './components/Header';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <div id="app-container">
      <Header />
      {this.children}
    </div>
  </Provider>
);

export default App;
