import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const ProjectItem = ({ data }) => (
  <Link to={`/projects/${data.id}`} className="projects__item">
    <div className="projects__title">{data.title}</div>
    <div className="projects__description">{data.description}</div>
  </Link>
);

ProjectItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default ProjectItem;
