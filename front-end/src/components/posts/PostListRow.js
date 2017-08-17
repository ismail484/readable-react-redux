import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';


const PostListRow = ({post}) => {
  return (
    <tr>
      <td><Link to={'/posts/' + post.id}>{post.body}</Link></td>
    </tr>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostListRow;
