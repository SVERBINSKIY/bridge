import { combineReducers } from 'redux';

import user from './user';
import game from './game';
import notification from './notification';

export default combineReducers({
  user,
  game,
  notification,
});
