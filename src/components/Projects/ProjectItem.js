import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { getRandomColor } from '@/helpers/getRandomColor';
import { colors } from './constans';

export const ProjectItem = ({ data }) => (
  <Link to={`/projects/${data.id}`} className="projects__item" style={{ borderTopColor: getRandomColor(colors) }}>
    <div className="projects__header">
      <div className="projects__title">{data.title}</div>
      <FontAwesomeIcon icon={faEllipsisV} />
    </div>

    <div className="projects__description">{data.description}</div>

    <div className="projects__footer">
      <div className="d-flex">
        <FontAwesomeIcon icon={faUserTie} />
        <div className="projects__members">2</div>
      </div>
      <div className="d-flex">
        <FontAwesomeIcon icon={faClock} />
        <div className="projects__creation-time">2 days ago</div>
      </div>
    </div>
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
