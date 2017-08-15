import {combineReducers} from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';

const rootReducer = combineReducers({
  // short hand property names
  posts,
  comments
})

export default rootReducer;