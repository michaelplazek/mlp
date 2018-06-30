import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Box } from 'grommet';


import rootReducer from './reducers';
import Header from './components/Header';

const store = createStore(rootReducer);
const App = (props) => (
  <Provider store={store}>
    <Box fill={true}>
      <Header />
      {props.children}
    </Box>
  </Provider>
);

export default App;
