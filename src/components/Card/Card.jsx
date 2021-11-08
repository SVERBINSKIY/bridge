import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({
  isGameStart, isShowResult, card, disabled, clickOnCardHandler,
}) {
  const getCard = () => {
    if (isGameStart) {
      return (
        <>
          <div className={`front ${isShowResult ? 'front-res' : ''}`}>
            <span className="card__incognito">
              ?
            </span>
          </div>
          <div className={`back ${isShowResult ? 'back-res' : ''}`}>
            <img
              src={card.image}
              alt="card"
              className="card__image"
            />
          </div>
        </>
      );
    }
    return (
      <img
        src="https://deckofcardsapi.com/static/img/KH.png"
        alt="card"
        className="card__image"
      />
    );
  };

  return (
    <div
      disabled={disabled}
      role="button"
      tabIndex={0}
      className={`card ${!disabled ? 'disabled' : ''} ${isShowResult ? 'res' : ''}`}
      onClick={() => clickOnCardHandler(card)}
      onKeyDown={() => clickOnCardHandler(card)}
    >
      {getCard()}
    </div>
  );
}

Card.propTypes = {
  clickOnCardHandler: PropTypes.func,
  isGameStart: PropTypes.bool,
  isShowResult: PropTypes.bool.isRequired,
  card: PropTypes.shape(),
  disabled: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  isGameStart: false,
  card: {},
  clickOnCardHandler: undefined,
};

export default Card;
