import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ placeholder, label, ...rest }) {
  return (
    <div className="input">
      {
				label && (
					<span className="input__label">
  {label}
					</span>
				)
			}
      <input
        className="input__control"
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  label: '',
};

export default Input;
