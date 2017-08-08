export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_START':
      return Object.assign({}, state, {isLoading: true, msg: '正在查询'})
    case 'SEARCH_FINISH':
      var status = action.status
      switch(status) {
        case 'SUCCESS':
          return Object.assign({}, state, {isLoading: false, items: action.data, status: true})
        case 'FAILURE':
          return Object.assign({}, state, {isLoading: false, status: false, msg: action.msg})
        default:
          break
      }
      break;
    default:
      break;
  }
  return state
}