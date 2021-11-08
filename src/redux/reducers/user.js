import {
  LOGIN_SUCCESS, LOGOUT, PLAY_AGAIN, START_GAME, USER_DRAW, USER_LOST, USER_WON,
} from '../actions';

const initialState = {
  isAuth: false,
  currentUser: {
    name: '',
    email: '',
    balance: 0,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { userData } = action;
      if (userData) {
        return {
          ...state,
          isAuth: true,
          currentUser: userData,
        };
      }

      return state;
    }

    case LOGOUT: {
      return initialState;
    }

    case PLAY_AGAIN:
    case START_GAME: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: state.currentUser.balance - 10,
        },
      };
    }
    case USER_WON: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: state.currentUser.balance + 20,
        },
      };
    }

    case USER_DRAW: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          balance: state.currentUser.balance + 10,
        },
      };
    }

    case USER_LOST: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
