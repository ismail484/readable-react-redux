
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as postsAction from '../../actions/postsAction'
import PostForm from './PostForm'
// import toastr from 'toastr'; 

class PostDetails extends React.Component {
 
constructor(props, context) {
    super(props, context);
    this.state = {
      post: Object.assign({}, this.props.post), 
      saving: false,
      isEditing: false
    };
    this.savePost = this.savePost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  updatePostState(event) {
    const field = event.target.title;
    const post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post: post});
  }

  savePost(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updatePost(this.state.post);

  } 

  deletePost(event) {
    this.props.actions.deletePost(this.state.post)
  }

  redirect() {
   // browserHistory.push('/posts');
  }


toggleEdit() {
    this.setState({isEditing: true});
  }

    render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>Edit Post</h1>
        <PostForm 
          post={this.state.post} 
          onSave={this.savePost} 
          onChange={this.updatePostState} 
          saving={this.state.saving}/> 
      </div>
      )
    }
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.post.title}</h1>
        <p>author: {this.state.post.author}</p>
        <p>category: {this.state.post.category}</p>
        <p>content: {this.state.post.content}</p>

        <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={this.deletePost} className="btn btn-default  ">delete</button>
      </div>
    );
  }
}









PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
 // catHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getPostById(posts, id) {
  let post = posts.find(post => post.id == id)
  return Object.assign({}, post)
}

function mapStateToProps(state, ownProps) {

      
  let post = {title: '', author: '',body: '',timeStamp:'', category: '',voteScore:1, deleted : '' };
  const postId = ownProps.params.id;
  if (postId && state.posts.length > 0 && state.comments.length > 0) {
    post = getPostById(state.posts, ownProps.params.id);
  } 
    return {post: post};
}




    function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsAction, dispatch)
  }
    }

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)