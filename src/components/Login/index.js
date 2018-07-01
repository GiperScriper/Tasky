import React from 'react';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { login } from 'actions/auth';
import { renderInputWithError } from 'helpers/validation';

import './login.scss';

class loginForm extends React.Component {
  onSubmit = data => {
    const { login, history } = this.props;

    login(data).then(() => {
      history.push('/');
    });
  };

  render() {
    const { isPending } = this.props;
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
                <button type="submit" className="login__button" disabled={isPending}>
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

const mapStateToProps = ({ auth }) => ({
  isPending: auth.isPending,
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loginForm);
