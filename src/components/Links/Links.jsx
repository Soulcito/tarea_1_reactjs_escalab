import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ url, component }) => {
  return (
    <li className="nav-item">
      <Link to={`/${url}`} className="nav-link">
        {component}
      </Link>
    </li>
  );
};

export default Links;
