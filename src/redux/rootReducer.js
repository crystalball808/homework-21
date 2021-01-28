import { combineReducers } from 'redux';
import { usersReducer } from './usersReducer';
import { tweetsReducer } from './tweetsReducer';

export const rootReducer = combineReducers({
  users: usersReducer,
  tweets: tweetsReducer,
});
