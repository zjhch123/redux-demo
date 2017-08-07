import Immutable from 'immutable'

export default (state = Immutable.List(), action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return state.push({text: action.text, id: state.size, isFinish: false})
    case 'DELETE_ITEM':
      return state.delete(-1)
    case 'FINISH_ITEM':
      var item = state.get(action.id)
      item.isFinish = !item.isFinish
      return state.set(action.id, item)
    default:
      return state
  }
}