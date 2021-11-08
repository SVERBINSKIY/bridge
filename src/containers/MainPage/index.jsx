import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';

import {
  startGame, selectCard, playAgain,
} from '../../redux/actions';

import Title from '../../components/Title/Title';
import Card from './CardContainer';

import Button from '../../components/Button/Button';

function MainPageContainer({
  isGameStart, cards, startGameHandler, selectCardHandler, isSelectableCard, isShowResult,
  playAgainHandler, deckId,
}) {
  const getButton = () => {
    if (isGameStart) {
      if (isShowResult) {
        return (
          <Button
            onClick={() => playAgainHandler(deckId)}
          >
            Play Again
          </Button>
        );
      }
      return '';
    }

    return (
      <Button
        onClick={startGameHandler}
      >
        Start Game
      </Button>
    );
  };

  return (
    <>
      <div>
        {
          !isGameStart && (
            <Title />
          )
        }
      </div>
      <div className="game__container">
        <Card
          type="left"
          card={cards[0]}
          isGameStart={isGameStart}
          isShowResult={isShowResult}
          isSelectableCard={isSelectableCard}
          selectCardHandler={selectCardHandler}
        />
        {/* eslint-disable-next-line no-nested-ternary */}
        <div className={`card__controller ${isGameStart ? (isShowResult ? 'c' : 'sb') : 'c'}`}>
          {getButton()}
        </div>
        <Card
          type="right"
          card={cards[1]}
          isGameStart={isGameStart}
          isShowResult={isShowResult}
          isSelectableCard={isSelectableCard}
          selectCardHandler={selectCardHandler}
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const gameState = get(state, 'game', {});

  return {
    deckId: get(gameState, 'deckId', ''),
    isGameStart: get(gameState, 'isGameStart', false),
    isSelectableCard: get(gameState, 'isSelectableCard', false),
    isShowResult: get(gameState, 'isShowResult', false),
    cards: get(gameState, 'cards', []),
  };
};

const mapDispatchToProps = {
  startGameHandler: startGame,
  selectCardHandler: selectCard,
  playAgainHandler: playAgain,
};

MainPageContainer.propTypes = {
  deckId: PropTypes.string,
  isGameStart: PropTypes.bool.isRequired,
  isSelectableCard: PropTypes.bool.isRequired,
  isShowResult: PropTypes.bool.isRequired,
  startGameHandler: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape).isRequired,
  selectCardHandler: PropTypes.func.isRequired,
  playAgainHandler: PropTypes.func.isRequired,
};

MainPageContainer.defaultProps = {
  deckId: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
