import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ListReducer from '../Reducer/ListReducer'
import Button from './Button'
import fetchFrom from '../Action/FetchFrom'

const ListStore = createStore(
  ListReducer,
  {isLoading: false,items: [], msg: '',status: true},
  applyMiddleware(thunk)
);

export default class ViewController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ListStore.getState() 
    }
  }

  updateState() {
    this.setState({
      search: ListStore.getState()
    })
  }

  search() {
    ListStore.dispatch(fetchFrom(this.refs.input.value))
    this.refs.input.value = ''
  }

  componentDidMount() {
    this.unsubscribe = ListStore.subscribe(this.updateState.bind(this))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <input type='text' ref="input"/>
        <Button onClick={this.search.bind(this)} title="search"/>
        <div>
          {(this.state.search.isLoading || (!this.state.search.isLoading && !this.state.search.status)) 
            && (<h1>{this.state.search.msg}</h1>)}
          {!this.state.search.isLoading && this.state.search.status && (
            <ul>
              {this.state.search.items.map((item) => (<li key={item.id}>{item.name}</li>))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
