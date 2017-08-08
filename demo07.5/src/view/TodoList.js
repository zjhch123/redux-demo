import Todo from './Todo'
import React from 'react'

export default (props) => (
  <div>
    <ul>
      {
        props.todos.map(todo => 
          (
            <Todo key={todo.id} title={todo.text} onClick={() => props.completeTodo(todo.id)} complete={todo.complete}/>
          )
        )
      }
    </ul>
  </div>
)