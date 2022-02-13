import React from 'react';
import { linksData } from '../../data/links';
import Card from '../Card/Card';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { data: linksData };
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h3 className="mt-5 mb-5">
          You can see 10 examples of each resources:
        </h3>
        <div className="row">
          {data
            .filter((e) => e.id > 1)
            .map(({ id, url, component, desc, className }) => (
              <Card
                key={id}
                url={url}
                component={component}
                desc={desc}
                className={className}
              />
            ))}
        </div>
      </>
    );
  }
}

export default Navigation;
