import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postsAction from '../../actions/postsAction';
import PostForm from './PostForm'
import {withRouter} from "react-router-dom"


class NewPostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post: {id:'',title: '', author: '',body: '',timeStamp:Date, category: '',voteScore:'', deleted : '',comments_ids: []},
      saving: false
    };
    this.redirect = this.redirect.bind(this);
    this.savePost = this.savePost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
  }

  updatePostState(event) {
    const field = event.target.name;
    const post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post: post});
  }
   // static contextTypes = { router: React.PropTypes.object }

  redirect(post) {
    
    this.context.history.push(`/posts/${post.id}`)
  //  this.context.router.transitionTo(`/posts/${post.id}`)
    


  }

  savePost(event) {
    event.preventDefault();
    this.props.actions.createPost(this.state.post)
   .then((post) => {
       this.redirect(post);
     });

  }
  
  render() {

    return (
      <div>
        <h1>New Post</h1>
        <PostForm 
          post={this.state.post} 
          onSave={this.savePost}
          onChange={this.updatePostState}
          />
      </div>
    );
  }
}



// NewPostPage.propTypes = {
//   actions: PropTypes.object.isRequired
// };



function mapStateToProps(state, ownProps) {}
 

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsAction, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);





