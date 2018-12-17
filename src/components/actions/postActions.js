import { ADD_POST, FETCH_POSTS} from './types';
import Axios from 'axios';

export const fetchPosts = () => dispatch => {
    console.log("fetching")
    Axios('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
            const result = posts.data;
            dispatch({
                type: FETCH_POSTS,
                payload: result
            })
           
        })
        .catch(err => console.log(err))
}


export const createPost = (postData) => dispatch => {
    console.log("calling the create post")
    // Axios.post('https://jsonplaceholder.typicode.com/posts',{
    //     headers : {
    //         'content-type' : 'application/json'
    //     },
    //     data : postData
    //   })
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(postData)
        })
        .then(res => res.json())
      .then(result =>  dispatch({
        type: ADD_POST,
        payload: result
    }))
}