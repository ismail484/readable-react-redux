import CommentsApi from '../utils/CommentsApi';


export const LOAD_COMMENTS = 'LOAD_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'



export function loadCommentsSuccess (comments) {
  return {
    type: LOAD_COMMENTS,
    comments
  }
}

export function createCommentSuccess (comment) {
  return {
    type: ADD_COMMENT,
    comment,
    
  }
}

export function updateCommentSuccess (comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}



export function deleteCommentSuccess (comment) {
  return {
    type: DELETE_COMMENT,
    comment
  }
}


export function loadComments() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    return CommentsApi.getAllComments().then(comments => {
      dispatch(loadCommentsSuccess(comments));
    }).catch(error => {
      throw(error);
    });
  };
}

export function updateComment(comment) {
  return function (dispatch) {
    return CommentsApi.updateComment(comment).then(responseComment => {
      dispatch(updateCommentSuccess(responseComment));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createComment(comment) {
  return function (dispatch) {
    return CommentsApi.createComment(comment).then(responseComment => {
      dispatch(createCommentSuccess(responseComment));
      return responseComment;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteComment(comment) {
  return function(dispatch) {
    return CommentsApi.deleteComment(comment).then(() => {
      console.log(`Deleted ${comment.id}`)
      dispatch(deleteCommentSuccess(comment));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}
