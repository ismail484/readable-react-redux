import React, {PropTypes} from 'react'
import PostListRow from './PostListRow'
import {connect} from 'react-redux'

const PostsList = ({posts}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post,id) => 
          <PostListRow key={id} post={post} />
        )}
      </tbody>
    </table>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
