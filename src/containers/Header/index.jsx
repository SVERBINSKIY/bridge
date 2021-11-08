import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';

import { logout } from '../../redux/actions';

import Header from '../../components/Header/Header';

const HeaderContainer = (props) => {
  const { userState, logoutHandler } = props;

  return (
    <Header
      isAuth={userState.isAuth}
      userScore={userState.currentUser.balance}
      handleClickForLogout={logoutHandler}
    />
  );
};

const mapStateToProps = (state) => {
  const userState = get(state, 'user', {});
  return {
    userState,
  };
};

const mapDispatchToProps = {
  logoutHandler: logout,
};

HeaderContainer.propTypes = {
  userState: PropTypes.shape().isRequired,
  logoutHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
