import React from 'react'
import {addTodo} from '../action'
import {connect} from 'react-redux'

class AddTodo extends React.Component {
  render () {
    return (
      <div>
        <input type='text' ref='input'/>
        <a href = "javascript:;" 
           onClick = {
            () => {
              this.props.addTodoHandler(this.refs.input.value)
              this.refs.input.value = ''
            }
          }>
           Add Todo
        </a>
      </div>
    )
  }
}

function mapStateToProps(state, oldProps) {
  return {}
}

function mapDispatchToProps(dispatch, oldProps) {
  return {
    addTodoHandler: (text) => text.trim() && dispatch(addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)