import { combineReducers } from 'redux'

import {
  //constans
  LOAD_COMMENTS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT
} from '../actions'



const initialCommentState = {
  "894tuq4ut84ut8v4t8wun89g": {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false 
  },
  "8tu4bsun805n8un48ve89": {
    id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
}




export default function comments (state = initialCommentState, action) {

  const { id, parentId,timestamp,body,author,voteScore,deleted,parentDeleted } = action
 


  
    //new state
  switch (action.type) {
    case ADD_COMMENT :
      return {
        //return the same state by using object spread syntax
        //but modify specific day
        ...state,
        [id]: {
           //at the same state of the day the same state but
          ...state[id],
          //name of specific recipe
          [parentId]: parentId.label,
          [timestamp]: timestamp.label,
          [body]:body.label,
          [author]: author.label,
          [voteScore]: voteScore.label,
          [deleted]: false,
          [parentDeleted]:false
        }
      }

      case EDIT_COMMENT :
      return {
        //return the same state by using object spread syntax
        //but modify specific day
        ...state,
        [id]: {
           //at the same state of the day the same state but
          ...state[id],
          //name of specific recipe
          [parentId]: parentId.label,
          [timestamp]: timestamp.label,
          [body]:body.label,
          [author]: author.label,
          [voteScore]: voteScore.label,
          [deleted]: false,
          [parentDeleted]:false
        }
      }


case DELETE_COMMENT :
      return {
        //return the same state by using object spread syntax
        //but modify specific day
        ...state,
        [id]: {
           //at the same state of the day the same state but
          ...state[id],
          //name of specific recipe
          [parentId]:null,
          [timestamp]: null,
          [body]:null,
          [author]: null,
          [voteScore]: null,
          [deleted]: true,
          [parentDeleted]:true
        }
      }
default :
      return state
  }
}



