import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ProjectForm from '@/components/Projects/ProjectForm';

class ProjectAddItem extends Component {
  state = {
    isEnabled: false,
  };

  toggleItemView = () => {
    this.setState(prevState => ({
      isEnabled: !prevState.isEnabled,
    }));
  };

  render() {
    return (
      <div className="projects__item projects__item--noborder">
        {this.state.isEnabled ? (
          <ProjectForm toggleItemView={this.toggleItemView} />
        ) : (
          <div className="projects__add" onClick={this.toggleItemView}>
            <FontAwesomeIcon icon={faPlus} className="projects__add-icon" />
            <div className="projects__add-title">Add Project</div>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectAddItem;
