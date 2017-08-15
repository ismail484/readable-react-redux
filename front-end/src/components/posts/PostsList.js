import React, {PropTypes} from 'react'
import PostListRow from './PostListRow'
import {connect} from 'react-redux'

class PostsList extends React.Component {
  
  render() {
      const posts = this.props.posts
   
    return (
      <table className="table">
      <thead>
        <tr>
          <th>Posts</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => 
          <PostListRow key={post.id} post={post} />
        )}
      </tbody>
    </table>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostsList);
