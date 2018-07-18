import React from 'react';
import ProjectList from './ProjectList';

import './projects.scss';

export const Projects = () => {
  console.log('render projects');
  const projects = [
    {
      id: 1,
      title: 'Tasky',
      description: 'Some custom text Some custom text Some custom text Some custom text Some custom text',
    },
    {
      id: 2,
      title: 'Sample',
      description: 'some sample project some sample projectsome sample projectsome sample project some sample project',
    },
  ];

  return <ProjectList projects={projects} />;
};

export default Projects;
