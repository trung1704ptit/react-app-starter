import { combineReducers } from 'redux';
import app from './appReducer';
import user from './userReducer';


const rootReducer = combineReducers({
  app,
  user
});

export default rootReducer;
