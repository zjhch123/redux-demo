import React, { Component } from 'react';
import { createStore } from 'redux';
import Counter from './Components/Counter';
import Reducer from './Reducer/Reducer';

const store = createStore(Reducer)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: store.getState()
    }
    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    this.setState({
      value: store.getState()
    })
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.updateState.bind(this))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className="App">
        <Counter 
          value = {this.state.value}
          onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
          onDecrement = {() => store.dispatch({type: 'DECREMENT'})} />
      </div>
    );
  }
}

export default App;
