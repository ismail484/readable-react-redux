import initialState from './initialState'

import {
  //constans
  LOAD_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
} from '../actions/postsAction'


// const initialPostState = {
//   "8xf0y6ziyjabvozdd253nd": {
//     id: '8xf0y6ziyjabvozdd253nd',
//     timestamp: 1467166872634,
//     title: 'Udacity is the best place to learn React',
//     body: 'Everyone says so after all.',
//     author: 'thingtwo',
//     category: 'react',
//     voteScore: 6,
//     deleted: false 
//   },
//   "6ni6ok3ym7mf1p33lnez": {
//     id: '6ni6ok3ym7mf1p33lnez',
//     timestamp: 1468479767190,
//     title: 'Learn Redux in 10 minutes!',
//     body: 'Just kidding. It takes more than 10 minutes to learn technology.',
//     author: 'thingone',
//     category: 'redux',
//     voteScore: -5,
//     deleted: false
//   },
//  "8xf0y6ziyjabvozdd253ne": {
//     id: '8xf0y6ziyjabvozdd253ne',
//     timestamp: 1467166872637,
//     title: 'Udacity is the best place to learn Redux',
//     body: 'Not Everyone says so after all.',
//     author: 'Mohamed',
//     category: 'python',
//     voteScore: 8,
//     deleted: false 
//   },
//   "6ni6ok3ym7mf1p33lnef": {
//     id: '6ni6ok3ym7mf1p33lnef',
//     timestamp: 1468479767194,
//     title: 'Learn Redux in 10 minutes!',
//     body: ' yes yes, Just kidding. It takes more than 10 minutes to learn technology.',
//     author: 'ismail',
//     category: 'java',
//     voteScore: -4,
//     deleted: false
//   }
// }

//ESX default argument
export default function posts (state = initialState.initialPostState ,action){
  //const { posts,id, timestamp, title,body,author,category,voteScore,deleted } = action
 
    //new state
  switch (action.type) {

    case LOAD_POSTS :
          // return new array of the action.posts;
          //or return {contain items of old array(...state) and new Items
          //  ...state, 
          //{ id:action.id,} }
          
          //method 2: if we want to change property of the state:
         // return Object.assign([], state, {completed:!state.completed })
         
          // return new array ofthe state and adding or change the new prperty;
          return Object.assign([], state, action.posts)
        
    case ADD_POST :
    
       // history.push(`/posts/${action.post.id}`)
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ]
         
 case EDIT_POST :
      return [
        ...state.filter(post => post.id !== action.post.id),
        Object.assign({}, action.post)
      ]


case DELETE_POST :
      const newState = Object.assign([], state);
      const indexOfPostToDelete = state.findIndex(post => {return post.id == action.post.id})
      newState.splice(indexOfPostToDelete, 1);
    // history.push({pathname:'/posts'});
      return newState;
default :
      return state
  }
}




