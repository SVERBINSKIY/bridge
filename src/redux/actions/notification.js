export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const showNotification = (notificationMessage) => ({
  type: SHOW_NOTIFICATION,
  notificationMessage,
});

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
