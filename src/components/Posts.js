import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchPosts} from '../components/actions/postActions'
import PropTypes from 'prop-types';

class Posts extends Component {
 componentDidMount(){
   this.props.fetchPosts();
 }

//  when it receives a new property from a state, it will run
 componentWillReceiveProps(nextProps) {
   if(nextProps.newPosts){
      this.props.posts.unshift(nextProps.newPosts)
   }
 }
  render() {
      const {posts} = this.props;
      const postDetail =  posts.map(post => {
          return(
            <div key={post.id}>
              <h3 style={{color:'#0F94E0'}}>{post.title}</h3>
              <p style={{color:'#000'}}>{post.body}</p>
          </div>
          )
          
      })
    return (
      <div> 
        <h3>New Posts</h3>
        {postDetail}
      </div>
    )
  }
}
Posts.propTypes = {
  fetchPosts : PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPosts: PropTypes.object
}
const mapStateToProps = state => ({
 posts: state.posts.items, //posts is the name of the key in combine reducer
 newPosts : state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);