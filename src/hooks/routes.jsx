import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LoginPage from '../pages/Login';
import MainPage from '../pages/MainPage';

// eslint-disable-next-line import/prefer-default-export
export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={LoginPage} exact />
      <Redirect to="/login" />
    </Switch>
  );
};
