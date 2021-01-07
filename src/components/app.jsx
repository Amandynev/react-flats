import React, { Component } from 'react';
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <div className="">
          Hello
          <Flat />
        </div>
        <div className="">
        Hello
          <Flat />
        </div>
      </div>
    );
  }
}

export default App;
