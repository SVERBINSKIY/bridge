import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

function LoginForm({
  handleSubmit, handleChange,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Email"
        placeholder="Enter your email..."
        type="email"
        name="email"
        onChange={handleChange}
      />
      <Input
        label="Password"
        placeholder="Enter your password..."
        type="password"
        name="password"
        onChange={handleChange}
      />
      <Button
        type="submit"
        block
      >
        Login
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default LoginForm;
