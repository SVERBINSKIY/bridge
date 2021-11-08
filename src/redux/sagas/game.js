import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';
import { get } from 'lodash';

import {
  startGame,
  drawCards, reshuffleCard,
} from '../../api';

import cardsWeight from '../../utils/cardsWeight';

import {
  START_GAME, gameWasStartSuccess, SELECT_CARD, showResult,
  userWon, userLost, drawCardSuccess,
  PLAY_AGAIN, GAME_WAS_START_SUCCESS, userDraw, showNotification, hideNotification,
} from '../actions';

import { delay } from '../../utils/delay';

function* startGameWorker() {
  try {
    const response = yield call(startGame);
    if (!response.success) {
      yield put(showNotification('Something went wrong!'));
      return;
    }
    // eslint-disable-next-line camelcase
    const { deck_id } = response;
    yield put(gameWasStartSuccess(deck_id));
  } catch (e) {
    yield put(showNotification(e));
  }
}

function* drawCardsWorker(action) {
  try {
    const { deckId } = action;
    yield call(reshuffleCard, deckId);
    const response = yield call(drawCards, deckId);
    const { cards } = response;
    yield put(drawCardSuccess(cards));
  } catch (e) {
    yield put(showNotification(e));
  }
}

function* calculateResult(action) {
  try {
    const state = yield select();
    const cards = get(state, 'game.cards', []);
    const filteredCard = cards.filter((card) => card.code !== action.selectedCard.code);
    if (cardsWeight[action.selectedCard.value] > cardsWeight[filteredCard[0].value]) {
      yield put(userWon(action.selectedCard));
      yield put(showNotification('You win!'));
    } else if (cardsWeight[action.selectedCard.value] < cardsWeight[filteredCard[0].value]) {
      yield put(userLost(filteredCard[0]));
      yield put(showNotification('You lose!'));
    } else {
      yield put(userDraw());
      yield put(showNotification('Draw!'));
    }
    yield put(showResult());
    yield call(delay, 2000);
    yield put(hideNotification());
  } catch (e) {
    yield put(showNotification(e));
  }
}

function* gameWatcher() {
  yield takeLatest(START_GAME, startGameWorker);
  yield takeLatest([PLAY_AGAIN, GAME_WAS_START_SUCCESS], drawCardsWorker);
  yield takeLatest(SELECT_CARD, calculateResult);
}

export default gameWatcher;
