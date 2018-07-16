import React, { Fragment } from 'react';
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

  return (
    <Fragment>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </Fragment>
  );
};

export default Projects;
