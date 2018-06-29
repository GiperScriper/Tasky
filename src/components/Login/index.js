import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { login } from 'actions/auth';
import { renderInputWithError } from 'helpers/validation';

import './login.scss';

class loginForm extends React.Component {
  onSubmit = data => {
    this.props.login(data).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    console.log('render login');
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

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(loginForm);
