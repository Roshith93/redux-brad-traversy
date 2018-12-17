import { combineReducers } from 'redux'
import postReducer from './postReducer';

// combines all the reducers in the application
export default combineReducers({
    posts: postReducer //posts is the name of the reducer(key) which we give
})
