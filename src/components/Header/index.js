import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarlybirds } from '@fortawesome/free-brands-svg-icons';
import { faBell, faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import userImage from '@/assets/images/user.png';

const Header = () => {
  console.log('render Header');
  return (
    <header className="header">
      <div className="header__logo">
        <FontAwesomeIcon icon={faEarlybirds} />
      </div>
      <ul className="header__menu">
        <li>
          <NavLink exact className="header__menu-link" activeClassName="header__menu-link--active" to="/">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className="header__menu-link" activeClassName="header__menu-link--active" to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
      <div className="header__notice">
        <button className="button button--transparent header__notice-button">
          <FontAwesomeIcon icon={faBell} />
          <span className="header__notice-indicator" />
        </button>
        <button className="button button--transparent header__notice-button">
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span className="header__notice-indicator" />
        </button>
        <button className="button button--transparent header__notice-button">
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
      <div className="header__user">
        <img src={userImage} className="header__user-image" alt="User" />
      </div>
    </header>
  );
};

export default Header;
