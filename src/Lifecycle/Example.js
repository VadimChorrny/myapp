import React, { Component, useState } from 'react';

export default class Example extends Component {
  constructor(props) {
    // fisrt step - Initialization
    console.clear();

    console.log('constructor');

    console.log('Initialized props: ', props);

    super(props); // for Inheritence

    // initialize state, props.number - that's default value for count
    this.state = { count: props.number, label: 'Touch Me' };

    this.press = this.press.bind(this); // bind our function
  }

  componentDidMount() {
    // після того як пройшли етапи: constructor, initialized props,render
    console.log('componentDidMount()');
  }

  shouldComponentUpdate() {
    // він викликається, коли ми щось змінюємо ... props/state
    // для того, щоб щось зробити під час оновлення компоненти
    console.log('shouldComponentUpdate()');
    return true;
  }

  componentDidUpdate() {
    // для того, щоб щось зробити після оновлення компоненти
    console.log('componentDidUpdate()');
  }

  press() {
    var counter = this.state.count;
    counter++;
    this.setState({ count: counter, label: 'Touch again' });
  }

  // first step
  render() {
    console.log('render()');
    return (
      <>
        {console.log('render() in JSX')}
        <button onClick={this.press}>{this.state.label}</button>
        <h1>Counter: {this.state.count}</h1>
      </>
    );
  }
}
