import React from 'react';
import { withRouter } from 'react-router';

import './card.css';

const Card = ({ url, component, desc, className, history, match }) => {
  return (
    <div className="col-sm-4">
      <div
        className="card mb-3 myCard"
        onClick={() => history.push(`${match.url}${url}`)}
      >
        <div className={`card-header ${className}`}>
          {component.toUpperCase()}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>Data for {component.toLowerCase()}</p>
            <footer className="blockquote-footer">{desc}</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
