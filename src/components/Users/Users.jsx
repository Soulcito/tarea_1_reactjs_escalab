import React from 'react';
import Table from '../Table/Table';

const initialState = [
  {
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  },
];

class Todos extends React.Component {
  constructor() {
    super();
    this.state = { data: initialState };
  }

  async componentDidMount() {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    ).then((response) => response.json());
    const newData = [];
    if (result.length > 0) {
      result.forEach((e) => {
        newData.push({
          id: e.id,
          name: e.name,
          username: e.username,
          email: e.email,
          phone: e.phone,
          website: e.website,
        });
      });

      this.setState({
        data: [...newData],
      });
    }
  }

  componentWillUnmount() {
    this.setState({ data: initialState });
  }

  render() {
    const { data } = this.state;
    return <div>{<Table data={data} className="table-info" />}</div>;
  }
}

export default Todos;
