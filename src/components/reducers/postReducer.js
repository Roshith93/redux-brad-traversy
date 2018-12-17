import { ADD_POST, FETCH_POSTS} from '../actions/types';

const intialState = {
    items: [], //the items which we fetch.
    item: {} // the items which we add.
}

const postReducer = (state = intialState, action) => {
    switch(action.type){
        case FETCH_POSTS:
             return {
                 ...state,
                 items: action.payload
             }
        case ADD_POST:
             return {
                 ...state,
                 item: action.payload
             }
        default: return state
    }
}

export default postReducer;