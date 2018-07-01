import React from 'react';

const ProjectDetail = ({ match }) => (
  <div>
    <h1>Project Detail Page: {match.params.id}</h1>
  </div>
);

export default ProjectDetail;
