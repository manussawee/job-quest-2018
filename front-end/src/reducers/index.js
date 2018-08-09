import { combineReducers } from 'redux'
import joke from './joke'
import jokes from './jokes'
import page from './page'

export default combineReducers({
    joke,
    jokes,
    page,
})
