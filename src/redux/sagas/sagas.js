import { all } from 'redux-saga/effects';

import loginWatcher from './login';
import gameWatcher from './game';

function* sagas() {
  yield all([
    loginWatcher(),
    gameWatcher(),
  ]);
}

export default sagas;
