import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import postsReducer from './postsReducer';
import selectedPostReducer from './selectedPostReducer';
import categoryReducer from './categoryReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    postsReducer,
    selectedPostReducer,
    categoryReducer,
    apiReducer,
    form: formReducer    
});


