import { combineReducers } from 'redux';
import users from './users/reducer';

const appReducer = combineReducers({
  users: users
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
