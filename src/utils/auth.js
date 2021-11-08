import users from '../mocks/user';

// eslint-disable-next-line import/prefer-default-export
export const loginUser = (loginData) => {
  const { email, password } = loginData;

  const searchedUser = users.find((user) => user.email === email);

  if (!searchedUser) {
    return {
      status: 404,
      message: 'User not found',
    };
  }

  if (searchedUser.password !== password) {
    return {
      status: 203,
      massage: 'Password is invalid',
    };
  }

  return {
    status: 200,
    message: 'Success',
    user: searchedUser,
  };
};

export const refreshLogin = (userData) => {
  const { email } = userData;

  const searchedUser = users.find((user) => user.email === email);

  if (!searchedUser) {
    return {
      status: 404,
      message: 'User not found',
    };
  }

  return {
    status: 200,
    message: 'Login refresh',
    user: searchedUser,
  };
};
