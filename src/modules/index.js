import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import main from './main';
import auth from './auth';
import login from './login';

export default combineReducers({
  router: routerReducer,
  auth,
  counter,
  main,
  login,
});
