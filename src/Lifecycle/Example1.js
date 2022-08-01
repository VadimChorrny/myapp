import React, { Component, useState } from 'react';

export default class ExampleOne extends Component {
  // initialized state
  constructor() {
    super();
    console.log('constructor');

    this.state = {
      count: 0,
      name: 'Elon',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }

  handleClick() {
    var counter = this.state.count;
    console.log(counter);
    counter++;
    this.setState({ count: counter, name: `Elon ${counter}` });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    prompt('Hello');
    console.log('componentWillUnmount()');
  }

  render() {
    console.log('render()');
    return (
      <>
        {console.log('render() in JSX')}
        <h1>Hello, {this.state.name}</h1>
        <button onClick={this.handleClick}>+</button>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}

function MyComponent(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello!</h1>
    </>
  );
}
