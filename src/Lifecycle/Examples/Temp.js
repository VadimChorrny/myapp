import React, { Component } from 'react';

export default class Temp extends Component {
  componentWillUnmount() {
    // тоді коли батьківський компонент щось змінює в поточному класі (Temp)
    alert('You really wanna closed me?');
    console.log('componentWillUnmount()');
  }

  render() {
    return (
      <div>
        <h1>Hello, thats I am!</h1>
      </div>
    );
  }
}
