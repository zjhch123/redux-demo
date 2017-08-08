export const addTodo = (text) => ({type: 'ADD_TODO', text})
export const completeTodo = (id) => ({type: 'FINISH_TODO', id})
export const setFilter = (filter) => ({type: 'SET_FILTER', filter})