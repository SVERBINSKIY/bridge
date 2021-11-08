import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';

import { checkLogin } from './redux/actions';
import { useRoutes } from './hooks/routes';

import Header from './containers/Header';
import Notification from './containers/Notification';

function App(props) {
  const { userState: { isAuth }, checkLoginHandler } = props;

  useEffect(() => {
    checkLoginHandler();
  }, []);

  const routes = useRoutes(isAuth);
  return (
    <div className="app-wrapper">
      <Header />
      <Notification />
      <div className="content">
        {routes}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const userState = get(state, 'user', {});

  return {
    userState,
  };
};

const mapDispatchToProps = {
  checkLoginHandler: checkLogin,
};

App.propTypes = {
  userState: PropTypes.shape().isRequired,
  checkLoginHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
