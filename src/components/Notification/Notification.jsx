import React from 'react';
import PropTypes from 'prop-types';

import './Notification.css';

function Notification(props) {
  const { notificationMessage, isShowNotification, closeNotificationHandler } = props;

  return (
    <div className={`notification ${isShowNotification ? 'show' : 'hide'}`}>
      <span className="close-btn" onClick={closeNotificationHandler}>&times;</span>
      {notificationMessage}
    </div>
  );
}

Notification.propTypes = {
  notificationMessage: PropTypes.string,
  isShowNotification: PropTypes.bool,
  closeNotificationHandler: PropTypes.func.isRequired,
};

Notification.defaultProps = {
  notificationMessage: '',
  isShowNotification: false,
};

export default Notification;
