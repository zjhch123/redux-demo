import {combineReducers} from 'redux'
import title from './title'
import itemsByTitle from './items'

const appReducers = combineReducers({title, itemsByTitle})

export default appReducers
