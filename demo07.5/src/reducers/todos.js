let nowTodoId = 0
export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: nowTodoId++,
          text: action.text,
          complete: false
        }
      ]
    case 'FINISH_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    default:
      return state
  }
}