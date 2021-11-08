import {
  DRAW_CARDS_SUCCESS,
  GAME_WAS_START_SUCCESS, PLAY_AGAIN, SHOW_RESULT,
} from '../actions';

const initialState = {
  isGameStart: false,
  isShowResult: false,
  isSelectableCard: false,
  result: {},
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_AGAIN:
    case GAME_WAS_START_SUCCESS: {
      return {
        ...state,
        isGameStart: true,
        isSelectableCard: true,
        isShowResult: false,
        deckId: action.deckId,
      };
    }

    case DRAW_CARDS_SUCCESS: {
      return {
        ...state,
        cards: action.cards,
      };
    }

    case SHOW_RESULT: {
      return {
        ...state,
        isSelectableCard: false,
        isShowResult: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default gameReducer;
