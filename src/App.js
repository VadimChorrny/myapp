import React from 'react';
import Example from './Lifecycle/Example';
import ExampleOne from './Lifecycle/Example1';
import Temp from './Lifecycle/Examples/Temp';

class App extends React.Component {
  // return <Example count={7} />;
  constructor() {
    super();
    this.state = {
      isShow: true,
    };

    this.delete = this.delete.bind(this); // тут ми наказуємо, що до функції будемо звертатись через this
  }

  delete() {
    if (this.state.isShow) {
      this.setState({ isShow: false });
    } else {
      this.setState({ isShow: true });
    }
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate()');
    return true;
  }

  render() {
    let tmp;
    if (this.state.isShow) {
      tmp = <Temp />;
    }

    return (
      <div>
        {tmp}
        <button onClick={this.delete}>Delete the component</button>
      </div>
      // <Example number='777' />
    );
  }
}

export default App;
