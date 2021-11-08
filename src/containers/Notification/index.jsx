import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';

import { hideNotification } from '../../redux/actions';

import Notification from '../../components/Notification/Notification';

function NotificationContainer(props) {
  const { isShowNotification, notificationMessage, hideNotificationHandler } = props;
  return (
    <Notification
      isShowNotification={isShowNotification}
      notificationMessage={notificationMessage}
      closeNotificationHandler={hideNotificationHandler}
    />
  );
}

const mapStateToProps = (state) => {
  const notificationState = get(state, 'notification', {});

  return {
    notificationMessage: get(notificationState, 'notificationMessage', ''),
    isShowNotification: get(notificationState, 'isShowNotification', false),
  };
};

const mapDispatchToProps = {
  hideNotificationHandler: hideNotification,
};

NotificationContainer.propTypes = {
  isShowNotification: PropTypes.bool.isRequired,
  notificationMessage: PropTypes.string.isRequired,
  hideNotificationHandler: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);
