import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import ListReducer from '../Reducer/ListReducer'
import Button from './Button'
import Logger from '../Logger/Logger'

const ListStore = createStore(
  ListReducer, 
  applyMiddleware(Logger('我是第一个中间件', '再见,第一个中间件'), Logger('我是第二个中间件', '再见,第二个中间件'))
);

export default class ButtonController extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ListStore.getState()
    }
  }

  updateState() {
    this.setState({
      items: ListStore.getState()
    })
  }

  addNewItemHandler() {
    ListStore.dispatch({type: 'ADD_ITEM', text: this.refs.input.value || 'new item'})
    this.refs.input.value = ''
  }

  deleteItemHandler() {
    ListStore.dispatch({type: 'DELETE_ITEM'})
  }

  finishItemHandler(id) {
    ListStore.dispatch({type: 'FINISH_ITEM', id: id})
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
        <Button 
            items = {this.state.items}
            addItem = {() => this.addNewItemHandler('new item')} 
            deleteItem = {() => this.deleteItemHandler()} 
            finishItem = {(id) => this.finishItemHandler(id)}
            />
      </div>
    )
  }
}

