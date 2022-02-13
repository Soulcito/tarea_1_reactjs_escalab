import React from 'react';
import Table from '../Table/Table';

const initialState = [
  {
    userId: '',
    id: '',
    title: '',
    body: '',
  },
];

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { data: initialState };
  }

  async componentDidMount() {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    ).then((response) => response.json());

    if (result.length > 0) {
      this.setState({
        data: [...result],
      });
    }
  }

  componentWillUnmount() {
    this.setState({ data: initialState });
  }

  render() {
    const { data } = this.state;
    return <div>{<Table data={data} className="table-primary" />}</div>;
  }
}

export default Posts;
