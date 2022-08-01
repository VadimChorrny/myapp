import React, { Component } from 'react';

export default class Example extends Component {
  constructor(props) {
    console.clear();

    console.log('constructor');

    console.log('Initialized props: ', props);

    super(props);

    this.state = { class: 'off', label: 'Press', count: props.count };

    this.press = this.press.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('get derived state');
    //return { "count": props.count };
    return null;
  }

  componentDidMount() {
    // після того як пройшли етапи: constructor, initialized props,render
    console.log('componentDidMount()');
  }
  shouldComponentUpdate() {
    // для того, щоб щось зробити під час оновлення компоненти
    console.log('shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    // для того, щоб щось зробити після оновлення компоненти
    console.log('componentDidUpdate()');
  }

  //   componentWillUnmount() {
  //     console.log('componentWillUnmount()');
  //   }

  press() {
    var className = this.state.class === 'off' ? 'on' : 'off';
    var counter = this.state.count;
    counter++;
    this.setState({ count: counter });
    this.setState({ class: className });
  }

  render() {
    console.log('render()');
    return (
      <>
        {console.log('render() in JSX')}
        <button onClick={this.press} className={this.state.class}>
          {this.state.label}
        </button>
        <h1>Counter: {this.state.count}</h1>
      </>
    );
  }
}
