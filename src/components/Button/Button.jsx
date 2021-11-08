import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  children, type, block, onClick, ...rest
}) {
  return (
    <button
      type={type}
      className={`button ${block ? 'block' : ''}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  block: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  block: false,
  type: 'button',
  onClick: undefined,
};

export default Button;
