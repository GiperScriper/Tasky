import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
