import { combineReducers } from 'redux';

import home from './home';
import portfolio from './portfolio';
import terminal from './terminal';

export default combineReducers(
  home,
  portfolio,
  terminal,
);
