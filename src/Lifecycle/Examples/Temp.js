import React, { Component } from 'react';

export default class Temp extends Component {
  constructor() {
    super();
    console.log('Constructor');
    this.state = {
      name: 'Vadym',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    // тоді коли батьківський компонент щось змінює в поточному класі (Temp)
    alert('You really wanna closed me?');
    console.log('componentWillUnmount()');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }

  handleChange() {
    // var tmpName = this.state.name;
    // tmpName = "Sergey";
    this.setState({ name: 'Sergey' });
  }

  render() {
    return (
      <div>
        {console.log('Render()')}
        <h1 onClick={this.handleChange}>
          Hello, thats I am {this.state.name}!
        </h1>
      </div>
    );
  }
}
