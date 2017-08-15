import initialState from './initialState'


import {
  //constans
  LOAD_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions/commentsAction'



// const initialCommentState = {
//   "894tuq4ut84ut8v4t8wun89g": {
//     id: '894tuq4ut84ut8v4t8wun89g',
//     parentId: "8xf0y6ziyjabvozdd253nd",
//     timestamp: 1468166872634,
//     body: 'Hi there! I am a COMMENT.',
//     author: 'thingtwo',
//     voteScore: 6,
//     deleted: false,
//     parentDeleted: false 
//   },
//   "8tu4bsun805n8un48ve89": {
//     id: '8tu4bsun805n8un48ve89',
//     parentId: "8xf0y6ziyjabvozdd253nd",
//     timestamp: 1469479767190,
//     body: 'Comments. Are. Cool.',
//     author: 'thingone',
//     voteScore: -5,
//     deleted: false,
//     parentDeleted: false
//   }
// }




export default function comments (state = initialState.initialCommentState, action) {

  //const { comments,comment,id, parentId,timestamp,body,author,voteScore,deleted,parentDeleted } = action

switch (action.type) {

    case LOAD_COMMENTS :
         
          return Object.assign([], state, action.comments)
        
    case ADD_COMMENT :
    
        this.context.history.push(`/posts/${action.post.id}/${action.comment.id}`)
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ]
         
 case EDIT_COMMENT :
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        Object.assign({}, action.comment)
      ]


case DELETE_COMMENT :
      const newState = Object.assign([], state);
      const indexOfPostToDelete = state.findIndex(comment => {return comment.id == action.comment.id})
      newState.splice(indexOfPostToDelete, 1);
      this.context.history.push({pathname:'/posts/${action.post.id}'})
      return newState;
default :
      return state

    
  }
}



