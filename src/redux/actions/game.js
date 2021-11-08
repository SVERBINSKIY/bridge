export const START_GAME = 'START_GAME';
export const startGame = () => ({
  type: START_GAME,
});

export const PLAY_AGAIN = 'PLAY_AGAIN';
export const playAgain = (deckId) => ({
  type: PLAY_AGAIN,
  deckId,
});

export const GAME_WAS_START_SUCCESS = 'GAME_WAS_START_SUCCESS';
export const gameWasStartSuccess = (deckId) => ({
  type: GAME_WAS_START_SUCCESS,
  deckId,
});

export const DRAW_CARDS_SUCCESS = 'DRAW_CARDS_SUCCESS';
export const drawCardSuccess = (cards) => ({
  type: DRAW_CARDS_SUCCESS,
  cards,
});

export const SELECT_CARD = 'SELECT_CARD';
export const selectCard = (selectedCard) => ({
  type: SELECT_CARD,
  selectedCard,
});

export const SHOW_RESULT = 'SHOW_RESULT';
export const showResult = () => ({
  type: SHOW_RESULT,
});

export const USER_WON = 'USER_WON';
export const userWon = (winningCard) => ({
  type: USER_WON,
  winningCard,
});

export const USER_LOST = 'USER_LOST';
export const userLost = (winningCard) => ({
  type: USER_LOST,
  winningCard,
});

export const USER_DRAW = 'USER_DRAW';
export const userDraw = () => ({
  type: USER_DRAW,
});
