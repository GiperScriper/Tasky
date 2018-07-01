import React from 'react';
import Project from './Project';

const Projects = () => {
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
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Project data={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
