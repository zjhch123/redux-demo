export default (state = 'frontend', action) => {
  switch (action.type) {
    case 'CHANGE_TITLE':
      return action.title
    default:
      return state
  }
}