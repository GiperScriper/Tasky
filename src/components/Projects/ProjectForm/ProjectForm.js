import React from 'react';
import { Form, Field } from 'react-final-form';

const ProjectForm = ({ onSubmit, toggleItemView }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form className="additing-form" onSubmit={handleSubmit}>
        <Field component="input" name="title" placeholder="Title" className="additing-form__input" />
        <Field component="textarea" name="description" placeholder="Description" className="additing-form__textarea" />
        <div className="projects__footer">
          <button className="button button--cancel" type="button" onClick={toggleItemView}>
            Cancel
          </button>
          <button className="button button--success" type="submit">
            Save
          </button>
        </div>
      </form>
    )}
  />
);

export default ProjectForm;
