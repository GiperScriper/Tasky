import React from 'react';
import { Form, Field } from 'react-final-form';
import { renderInputWithError } from '@/helpers/validation';

import './login.scss';

const loginForm = ({ isPending, onSubmit }) => (
  <div className="login__container">
    <div className="login__title">Tasky</div>
    <div className="login__bg">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form name="loginForm" onSubmit={handleSubmit} className="login__form">
            <Field name="login" type="text" placeholder="Login" component={renderInputWithError} />
            <Field name="password" type="password" placeholder="Password" component={renderInputWithError} />
            <button type="submit" className="login__button" disabled={isPending}>
              {isPending ? (
                <div class="dotted-spinner">
                  <div class="dotted-spinner__item dotted-spinner__item--first" />
                  <div class="dotted-spinner__item dotted-spinner__item--second" />
                  <div class="dotted-spinner__item dotted-spinner__item--third" />
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        )}
      />
    </div>
  </div>
);

export default loginForm;
