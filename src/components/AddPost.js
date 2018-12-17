import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../components/actions/postActions';

class AddPost extends Component {
  state = {
    title : '',
    body : ''
  }
  onChange = event => {
    this.setState({
      [event.target.name]  : event.target.value
    })
  }
  onSubmit = event => {
    event.preventDefault();
      const data = {
        title : this.state.title,
        body : this.state.body
      }
    //  call actions
    this.props.createPost(data);
  }
  render() {
    return (
      <div>
        <h3>Add post</h3>
        <form onSubmit={this.onSubmit} >
        <TextField
          id="standard-uncontrolled"
          label="Add title"
          margin="normal"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        /> <br />
         <TextField
          id="standard-uncontrolled"
          label="Add Body"
          margin="normal"
          name="body"
          onChange={this.onChange}
          value={this.state.body}
        />  <br />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
</form>
      </div>
    )
  }
}

AddPost.propTypes ={
  createPost : PropTypes.func.isRequired
}
export default connect(null, {createPost})(AddPost);