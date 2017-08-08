import React, { Component } from 'react';
import CounterController from './Controller/CounterController'
class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterController />
      </div>
    );
  }
}

export default App;
