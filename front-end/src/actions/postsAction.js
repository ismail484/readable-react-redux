import PostsApi from '../utils/PostsApi'


export const LOAD_POSTS = 'LOAD_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'


//wrapping all actions in action creators functions
//it takes an object (all payloads to setup the event)
export function loadPostsSuccess (posts) {
  return {
    type: LOAD_POSTS,
    posts,
  }
}
export function createPostSuccess (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function updatePostSuccess (post) {
  return {
    type: EDIT_POST,
    post,
  }
}


export function deletePostSuccess (post) {
  return {
    type: DELETE_POST,
    post,
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