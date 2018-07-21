import React, { Component } from 'react';

export default class ProjectForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log('dispatch project data');
  };

  render() {
    return (
      <form className="additing-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Project name" className="additing-form__input" />
        <textarea placeholder="Project description" className="additing-form__textarea" />
        <div className="projects__footer">
          <button className="button button--secondary" type="button" onClick={this.props.toggleItemView}>
            Cancel
          </button>
          <button className="button button--primary" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}
