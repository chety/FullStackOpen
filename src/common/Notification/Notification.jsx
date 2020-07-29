import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

export function Notification({ message, type }) {
  if (!message) {
    return null;
  }
  return <div className={`notification ${type}`}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['error', 'info']),
};

Notification.defaultProps = {
  type: 'info',
};
