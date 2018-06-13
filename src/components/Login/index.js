import React from 'react';
import { Form, Field } from 'react-final-form';
import authService from 'helpers/authService';
import { renderInputWithError } from 'helpers/validation';

import './login.scss';

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
        <div className="login__bg">
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit, pristine, invalid }) => (
              <form name="loginForm" onSubmit={handleSubmit} className="login__form">
                <Field name="login" type="text" placeholder="Login" component={renderInputWithError} />
                <Field name="password" type="password" placeholder="Password" component={renderInputWithError} />
                <button type="submit" className="login__button">
                  Sign In
                </button>
              </form>
            )}
          />
        </div>
      </div>
    );
  }
}
