import {combineReducers} from 'redux'
import user from './User'
import book from './book'
import movie from './movie'

export default combineReducers({
    user,
    book,
    movie
})
