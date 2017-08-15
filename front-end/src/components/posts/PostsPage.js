import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PostsList from './PostsList'



class PostsPage extends React.Component {
  
  render() {
      const posts = this.props.posts
    console.log('Props',this.props)
    return (
      <div className="col-md-12">
        <h1>Posts <Link to={'/posts/new'} className="btn btn-primary">+ Post</Link></h1>
        <div className="col-md-4">
          <PostsList />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}


PostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  children: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(PostsPage);
