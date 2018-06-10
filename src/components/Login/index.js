import React from 'react';
import { Form, Field } from 'react-final-form';
import authService from 'helpers/authService';
import { required, renderInputWithError } from 'helpers/validation';
import './login.css';

export default class loginForm extends React.Component {
  onSubmit = data => {
    console.log('submit', data);
    authService.setToken(data.login);
    this.props.history.push('/');
    // TO-DO signin request
  };

  render() {
    return (
      <div className="login__container">
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form name="loginForm" onSubmit={handleSubmit}>
              <Field
                name="login"
                type="text"
                placeholder="enter login..."
                validate={required}
                component={renderInputWithError}
              />
              <Field
                name="password"
                type="password"
                placeholder="enter password..."
                validate={required}
                component={renderInputWithError}
              />

              <button type="submit">login</button>
            </form>
          )}
        />
      </div>
    );
  }
}
