import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer';
import selectedPostReducer from './selectedPostReducer';
import commentsReducer from './commentsReducer';
import categoriesReducer from './categoriesReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    postsReducer,
    selectedPostReducer,
    categoriesReducer,
   // commentsReducer,
    apiReducer,
    form: formReducer    
});


