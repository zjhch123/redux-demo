const selectedData = (state = {
  isLoading: false,
  isInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
    case 'INVALIDATE_DATA':
      return {
        ...state,
        isInvalidate: true
      }
    case 'REQUEST_DATA':
      return {
        ...state,
        isLoading: true,
        isInvalidate: false
      }
    case 'RECEIVE_DATA':
      return {
        ...state,
        isLoading: false,
        isInvalidate: false,
        items: action.items,
        lastUpdate: Date.now()
      }
    default:
      return state
  }
}

const data = (state = {}, action) => {
  switch (action.type) {
    case 'INVALIDATE_DATA':
    case 'REQUEST_DATA':
    case 'RECEIVE_DATA':
      return {
        ...state,
        [action.title]: selectedData(state[action.title], action)
      }
    default:
      return state
  }
}

export default data