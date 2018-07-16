import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

export const ProjectList = ({ projects }) => (
  <ul className="projects">
    {projects.map(project => (
      <li key={project.id}>
        <ProjectItem data={project} />
      </li>
    ))}
  </ul>
);

ProjectList.defaultProps = {
  projects: [],
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
