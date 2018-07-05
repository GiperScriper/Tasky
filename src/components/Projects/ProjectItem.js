import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProjectItem = ({ data }) => (
  <div>
    <h1>
      <Link to={`/projects/${data.id}`}>{data.title}</Link>
    </h1>
    <p>{data.description}</p>
  </div>
);

ProjectItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default ProjectItem;
