import React, { Component } from 'react';
import reducer from './Reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterContainer from './Container/CounterContainer'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CounterContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
