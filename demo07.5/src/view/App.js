import React from 'react'
import AddTodo from '../controller/AddTodo'
import TodoList from '../controller/TodoList'
import Footer from '../view/Footer'
export default () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
)