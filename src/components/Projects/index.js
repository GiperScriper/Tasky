import React from 'react';
import ProjectList from './ProjectList';

import './projects.scss';

export const Projects = () => {
  console.log('render projects');
  const projects = [
    {
      id: 1,
      title: 'Tasky',
      description: 'TO-DO: create projects list',
    },
    {
      id: 2,
      title: 'Sample',
      description: 'some sample project',
    },
  ];

  return <ProjectList projects={projects} />;
};

export default Projects;
