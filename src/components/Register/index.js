import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import api from '@/api';

class Register extends Component {
  initialData = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  state = {
    data: this.initialData,
    isPending: false,
    errorMessage: null,
    errors: {},
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      data: { ...prevState.data, [name]: value },
    }));
  };

  isPasswordValid = ({ data, errors }) => {
    const { password, passwordConfirmation } = data;

    if (password && passwordConfirmation && password !== passwordConfirmation) {
      errors.passwordConfirmation = 'do not match';
    }

    return errors;
  };

  isFormEmpty = data => {
    const errors = Object.keys(data).reduce((acc, value) => {
      return data[value] ? acc : { ...acc, [value]: 'this field is required' };
    }, {});

    return { data, errors };
  };

  isFormValid = data => {
    const errors = compose(
      this.isPasswordValid,
      this.isFormEmpty
    )(data);

    this.setState({ errors });

    return !Object.keys(errors).length;
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { data } = this.state;

    if (!this.isFormValid(data)) {
      return;
    }

    this.setState({ isPending: true, errorMessage: null });

    try {
      const createdUser = await api.createUser(data);
      await createdUser.user.updateProfile({
        displayName: data.username,
      });
      await api.saveUser(createdUser.user);
      this.setState({ data: this.initialData });
    } catch ({ message }) {
      this.setState({ errorMessage: message });
    } finally {
      this.setState({ isPending: false });
    }
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state.data;
    const { errorMessage, errors, isPending } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          {errors.username && <h3>{errors.username}</h3>}
          <br />

          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={this.handleChange} />
          {errors.email && <h3>{errors.email}</h3>}
          <br />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />
          {errors.password && <h3>{errors.password}</h3>}
          <br />

          <label>confirmedPasswrod:</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
          />
          {errors.passwordConfirmation && <h3>{errors.passwordConfirmation}</h3>}

          <button type="submit" disabled={isPending}>
            {isPending ? 'Loading' : 'Sign Up'}
          </button>
        </form>

        <Link to="/login">go to login</Link>
        {errorMessage && <h2>{errorMessage}</h2>}
      </div>
    );
  }
}

export default Register;
