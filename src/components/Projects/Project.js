import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ data }) => (
  <div>
    <h1>
      <Link to={`/projects/${data.id}`}>{data.title}</Link>
    </h1>
    <p>{data.description}</p>
  </div>
);

export default Project;
