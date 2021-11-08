import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../redux/actions';

import Form from './Form';

const LoginFormContainer = ({ loginHandler }) => {
  const [formValue, setFormValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    loginHandler(formValue);
  };

  const handleChange = (e) => {
    setFormValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

const mapDispatchToProps = {
  loginHandler: login,
};

LoginFormContainer.propTypes = {
  loginHandler: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginFormContainer);
