import React from 'react';
import Links from '../Links/Links';
import { linksData } from '../../data/links';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = { data: linksData };
  }

  render() {
    const { data } = this.state;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {data.map(({ id, ...otherDataProps }) => (
                <Links key={id} {...otherDataProps} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
