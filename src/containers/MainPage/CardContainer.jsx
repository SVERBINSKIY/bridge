import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

function CardContainer(props) {
  const {
    type, card, isGameStart, isShowResult, isSelectableCard, selectCardHandler,
  } = props;

  return (
    <div className="card__container">
      {
        (type === 'right') && (
          (isGameStart && !isShowResult) && (
            <Button
              disabled={!isSelectableCard}
              onClick={() => selectCardHandler(card.value)}
            >
              Right
            </Button>
          )
        )
      }
      <Card
        card={card}
        isGameStart={isGameStart}
        isShowResult={isShowResult}
        disabled={isSelectableCard}
        clickOnCardHandler={selectCardHandler}
      />
      {
        (type === 'left') && (
          (isGameStart && !isShowResult) && (
            <Button
              disabled={!isSelectableCard}
              onClick={() => selectCardHandler(card.value)}
            >
              Left
            </Button>
          )
        )
      }
    </div>
  );
}

CardContainer.propTypes = {
  type: PropTypes.oneOf(['left', 'right']).isRequired,
  card: PropTypes.shape(),
  isGameStart: PropTypes.bool.isRequired,
  isShowResult: PropTypes.bool.isRequired,
  isSelectableCard: PropTypes.bool.isRequired,
  selectCardHandler: PropTypes.func.isRequired,
};

CardContainer.defaultProps = {
  card: {},
};

export default CardContainer;
