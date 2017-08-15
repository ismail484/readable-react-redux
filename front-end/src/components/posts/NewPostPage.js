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
      post: {title: '', author: '',body: '',timeStamp:'', category: '',voteScore:'', deleted : ''},
      saving: false
    };
    this.redirect = this.redirect.bind(this);
    this.savePost = this.savePost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
  }

  updatePostState(event) {
    const field = event.target.name;
    const post = this.state.cat;
    post[field] = event.target.value;
    return this.setState({post: post});
  }
    static contextTypes = { router: React.PropTypes.object }

  redirect(post) {
    //browserHistory.push(`/cats/${cat.id}`);
    this.context.router.transitionTo(`/posts/${post.id}`)
    //this.context.history.push('/home')


  }

  savePost(event) {
    event.preventDefault();
    this.props.actions.createPost(this.state.post)
    // .then((cat) => {
    //   this.redirect(cat);
    // });

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



NewPostPage.propTypes = {
  actions: PropTypes.object.isRequired
};



function mapStateToProps(state, ownProps) {}
 

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsAction, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);





