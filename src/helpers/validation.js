import React from 'react';

export const required = value => (!value ? 'this field is required.' : '');

export const renderInputWithError = ({ input, meta, type, label, placeholder }) => (
  <div>
    {label && <label>{label}</label>}
    <input type={type} {...input} placeholder={placeholder} />
    {meta.touched && meta.error && <p>{meta.error}</p>}
  </div>
);
