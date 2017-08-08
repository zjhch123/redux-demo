import TodoList from '../view/TodoList'
import {connect} from 'react-redux'
import {completeTodo} from '../action'

const getTodo = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.complete)
    case 'SHOW_COMPLETE':
      return todos.filter(todo => todo.complete)
    default:
      return todos
  }
}

function mapStateToProps(state, oldProps) {
  return {
    todos: getTodo(state.todos, state.filter)
  }
}

function mapDispatchToProps(dispatch, oldProps) {
  return {
    completeTodo: (id) => dispatch(completeTodo(id))
  }
}
const TodoListController = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListController