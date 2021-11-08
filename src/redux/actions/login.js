export const LOGIN = 'LOGIN';
export const login = (loginData) => ({
  type: LOGIN,
  loginData,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  userData,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT,
});

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const checkLogin = () => ({
  type: CHECK_LOGIN,
});
