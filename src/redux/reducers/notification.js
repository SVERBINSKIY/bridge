import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from '../actions';

const initialState = {
  isShowNotification: false,
  notificationMessage: '',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        isShowNotification: false,
        notificationMessage: '',
      };
    }

    case SHOW_NOTIFICATION: {
      return {
        ...state,
        isShowNotification: true,
        notificationMessage: action.notificationMessage,
      };
    }

    default: {
      return state;
    }
  }
};

export default notificationReducer;
