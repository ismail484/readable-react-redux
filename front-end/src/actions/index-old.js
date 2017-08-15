import PostsApi from '../utils/api';

//six different actions means six different constans

export const LOAD_POSTS = 'LOAD_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

export const LOAD_COMMENTS = 'LOAD_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'



//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)
export function loadPostsSuccess ({ posts,id, timestamp,title,body,author,category,voteScore,deleted }) {
  return {
    type: LOAD_POSTS,
    posts,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}
export function createPostSuccess ({ post,id, timestamp,title,body,author,category,voteScore,deleted }) {
  return {
    type: ADD_POST,
    post,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

export function updatePostSuccess ({ post,id, timestamp,title,body,author,category,voteScore,deleted }) {
  return {
    type: EDIT_POST,
    post,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}


export function deletePostSuccess ({ post,id, timestamp,title,body,author,category,voteScore,deleted }) {
  return {
    type: DELETE_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted
  }
}

export function loadCommentsSuccess ({ id, parentId,timestamp,body,author,voteScore,deleted,parentDeleted }) {
  return {
    type: LOAD_COMMENTS,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}

export function createCommentSuccess ({ id, parentId,timestamp,body,author,voteScore,deleted,parentDeleted }) {
  return {
    type: ADD_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}

export function updateCommentSuccess ({ id, parentId,timestamp,body,author,voteScore,deleted,parentDeleted }) {
  return {
    type: ADD_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}



export function deleteCommentSuccess ({ id, parentId,timestamp,body,author,voteScore,deleted,parentDeleted }) {
  return {
    type: DELETE_COMMENT,
    id,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted
  }
}

export function loadPosts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return PostsApi.getAllPosts().then(posts => {
      dispatch(loadPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updatePost(post) {
  return function (dispatch) {
    return PostsApi.updatePost(post).then(responsePost => {
      dispatch(updatePostSuccess(responsePost));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createPost(post) {
  return function (dispatch) {
    return PostsApi.createPost(post).then(responsePost => {
      dispatch(createPostSuccess(responsePost));
      return responsePost;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deletePost(post) {
  return function(dispatch) {
    return PostsApi.deletePost(post).then(() => {
      console.log(`Deleted ${post.id}`)
      dispatch(deletePostSuccess(post));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}



