import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import './Header.css';

function Header({ isAuth, userScore, handleClickForLogout }) {
  return (
    <div className="header">
      <div className="header__logo">
        <span>Logo</span>
      </div>
      <div className="header__score">
        {
          isAuth && (
            <span>
              Balance:
              {' '}
              {userScore}
              $
            </span>
          )
        }
      </div>
      <div className="header__control">
        {
          isAuth && (
            <Button
              onClick={handleClickForLogout}
            >
              Log out
            </Button>
          )
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool,
  userScore: PropTypes.number,
  handleClickForLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isAuth: false,
  userScore: 0,
};

export default Header;
