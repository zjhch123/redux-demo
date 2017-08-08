import React from 'react'
import Counter from '../View/Counter'
import CounterReducer from '../Reducer/CounterReducer'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type: 'increase'}),
    onDecreaseClick: () => dispatch({type: 'decrease'})
  }
}

var store = createStore(CounterReducer)

var CounterController = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default () => (
  <Provider store={store}>
    <CounterController />
  </Provider>
)