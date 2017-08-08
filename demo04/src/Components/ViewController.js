import React from 'react'
import { createStore } from 'redux'
import ListReducer from '../Reducer/ListReducer'
import Button from './Button'

const ListStore = createStore(
  ListReducer,
  {isLoading: false,items: [], msg: '',status: true}
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
    ListStore.dispatch({type: 'SEARCH_START'})
    fetch('https://api.github.com/search/repositories?q=' + this.refs.input.value + '&sort=stars')
        .then((res) => {
          if (res.status === 200) {
            return res.json()
          }
          throw new Error(res.json().message)
        })
        .then((json) => {
          ListStore.dispatch({type: 'SEARCH_FINISH', data: json.items, status: 'SUCCESS'})
        })
        .catch((error) => {
          ListStore.dispatch({type: 'SEARCH_FINISH', msg: error.toString(), status: 'FAILURE'})
        })
    this.refs.input.value = ''
  }

  reset() {
    ListStore.dispatch({type: 'RESET'})
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
        <Button onClick={this.reset.bind(this)} title="reset"/>
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
