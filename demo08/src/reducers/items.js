const selectedItem =  (state = {
  isLoading: false,
  isInvalidate: true,
  items: []
}, action) => {
  switch (action.type) {
    case 'INVALIDATE_ITEMS':
      return {
        ...state,
        isInvalidate: true
      }
    case 'REQUEST_ITEMS':
      return {
        ...state,
        isLoading: true,
        isInvalidate: false
      }
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        isLoading: false,
        isInvalidate: false,
        items: action.items,
        lastUpdate: action.receivedTime
      }
    default:
      return state
  }
}

const itemsByTitle = (state = { }, action) => {
  switch (action.type) {
    case 'INVALIDATE_ITEMS':
    case 'REQUEST_ITEMS':
    case 'RECEIVE_ITEMS':
      return {
        ...state,
        [action.title]: selectedItem(state[action.title], action)
      }
    default: 
      return state
  }
}

export default itemsByTitle