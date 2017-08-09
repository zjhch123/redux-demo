export default (state = 'frontend', action) => {
  switch (action.type) {
    case 'CHANGE_TYPE':
      return action.title
    default: 
      return state
  }
}