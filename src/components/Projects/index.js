import React from 'react';
import ProjectList from './ProjectList';

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
    <div>
      <h1>Projects</h1>
      <hr />
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
