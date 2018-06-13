import React from 'react';

export const required = value => (!value ? 'this field is required.' : '');

export const renderInputWithError = ({ input, meta, type, label, placeholder }) => (
  <div className="login__form-item">
    {label && <label>{label}</label>}
    <input type={type} {...input} placeholder={placeholder} className="login__form-input" spellCheck="false" />
    {meta.touched && meta.error && <div className="login__form-error">{meta.error}</div>}
  </div>
);
