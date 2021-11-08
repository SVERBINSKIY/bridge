import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const startGame = async () => {
  try {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    return response.data;
  } catch (e) {
    return e;
  }
};

export const drawCards = async (deckId) => {
  try {
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
    return response.data;
  } catch (e) {
    return e;
  }
};

export const reshuffleCard = async (deckId) => {
  try {
    const response = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/?remaining=true`);
    return response.data;
  } catch (e) {
    return e;
  }
};
