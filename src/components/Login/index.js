import React from 'react';
import { Form, Field } from 'react-final-form';
import authService from 'helpers/authService';
import { required, renderInputWithError } from 'helpers/validation';

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
        <div className="login__title">Tasky</div>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit, pristine, invalid }) => (
            <form name="loginForm" onSubmit={handleSubmit} className="login__form">
              <Field
                name="login"
                type="text"
                placeholder="Username"
                validate={required}
                component={renderInputWithError}
              />
              <Field
                name="password"
                type="password"
                placeholder="Password"
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
