import React from 'react';
import Example from './Lifecycle/Example';
import ExampleOne from './Lifecycle/Example1';
import Temp from './Lifecycle/Examples/Temp';

class App extends React.Component {
  // return <Example count={7} />;
  constructor() {
    super();
    this.state = {
      display: true,
    };

    this.delete = this.delete.bind(this); // тут ми наказуємо, що до функції будемо звертатись через this
  }

  delete() {
    this.setState({ display: false });
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }

  render() {
    let tmp;
    if (this.state.display) {
      tmp = <Temp />;
    }

    return (
      <div>
        {tmp}
        <button onClick={this.delete}>Delete the component</button>
      </div>
    );
  }
}

export default App;
