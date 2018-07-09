import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { faBell, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  console.log('render Header');
  return (
    <header className="header">
      <div className="header__logo">
        <FontAwesomeIcon icon={faEarlybirds} />
      </div>
      <ul className="header__menu">
        <li>
          <Link className="header__menu-link" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="header__menu-link" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
      <div className="header__notice">
        <button className="button header__notice-button">
          <FontAwesomeIcon icon={faBell} />
          <span className="header__notice-indicator" />
        </button>
        <button className="button header__notice-button">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="header__notice-indicator" />
        </button>
        <button className="button header__notice-button">
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
    </header>
  );
};

export default Header;
