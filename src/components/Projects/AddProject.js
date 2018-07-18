import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdditing: false,
    };
  }

  handleAdditing = () => {
    this.setState({
      isAdditing: !this.state.isAdditing,
    });
  };

  render() {
    return (
      <div className="projects__item projects__item--noborder">
        {this.state.isAdditing ? (
          <form className="additing-form">
            <input type="text" placeholder="Project name" className="additing-form__input" />
            <textarea placeholder="Project description" className="additing-form__textarea" />
            <div className="projects__footer">
              <button className="button button--cancel" onClick={this.handleAdditing}>
                Cancel
              </button>
              <button className="button button--success">Save</button>
            </div>
          </form>
        ) : (
          <div className="projects__add" onClick={this.handleAdditing}>
            <FontAwesomeIcon icon={faPlus} className="projects__add-icon" />
            <div className="projects__add-title">Add Project</div>
          </div>
        )}
      </div>
    );
  }
}

export default AddProject;
