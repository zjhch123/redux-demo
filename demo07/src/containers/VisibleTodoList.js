import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter((todo) => todo.complete)
    case 'SHOW_ACTIVE':
      return todos.filter((todo) => !todo.complete)
    default: 
      return todos
  }
}

var mapDispatchToProps = {
  onTodoClick: toggleTodo
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)



