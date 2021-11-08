import { takeLatest, call, put } from 'redux-saga/effects';

import {
  LOGIN, LOGOUT, loginSuccess, CHECK_LOGIN, showNotification,
} from '../actions';

import { loginUser, refreshLogin } from '../../utils/auth';
import {
  saveToLocalStorage, removeFromLocalStorage, getDataFromLocalStorage,
} from '../../utils/localStorage';

const userKeyForLS = 'userData';

function* loginWorker(action) {
  try {
    const { loginData } = action;
    const response = yield call(loginUser, loginData);
    if (response.status !== 200) {
      yield put(showNotification(response.message));
      return;
    }
    yield put(loginSuccess(response.user));
    yield call(saveToLocalStorage, userKeyForLS, response.user);
  } catch (e) {
    yield put(showNotification(e));
  }
}

function* logoutWorker() {
  try {
    yield call(removeFromLocalStorage, userKeyForLS);
  } catch (e) {
    yield put(showNotification(e));
  }
}

function* refreshLoginWorker() {
  try {
    const userData = yield call(getDataFromLocalStorage, userKeyForLS);
    if (!userData) {
      yield put(showNotification('Something went wrong!'));
      return;
    }
    const response = yield call(refreshLogin, userData);
    if (response.status !== 200) {
      yield put(showNotification(response.message));
      return;
    }
    yield put(loginSuccess(response.user));
    yield call(saveToLocalStorage, userKeyForLS, response.user);
  } catch (e) {
    yield put(showNotification(e));
  }
}

function* loginWatcher() {
  yield takeLatest(LOGIN, loginWorker);
  yield takeLatest(LOGOUT, logoutWorker);
  yield takeLatest(CHECK_LOGIN, refreshLoginWorker);
}

export default loginWatcher;
