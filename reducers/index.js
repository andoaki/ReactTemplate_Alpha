import { combineReducers } from 'redux';
import login from './login';
import top from './top';
import gamen1 from './gamen1';
import gamen2 from './gamen2';
import gamen3 from './gamen3';
import gamen4 from './gamen4';

const rootReducer = combineReducers({
  login,
  top,
  gamen1,
  gamen2,
  gamen3,
  gamen4
});

export default rootReducer;
