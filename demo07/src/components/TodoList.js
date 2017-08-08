import React from 'react'
import Todo from './Todo'

export default (props) => {
  return (
    <ul>
      {
        props.todos.map((todo) => (
          <Todo key={todo.id} 
                onClick={() => props.onTodoClick(todo.id)}
                {...todo} />
        ))
      }
    </ul>
  )
}