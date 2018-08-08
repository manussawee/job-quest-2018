import { combineReducers } from 'redux'
import jokes from './jokes'
import page from './page'

export default combineReducers({
    jokes,
    page
})
