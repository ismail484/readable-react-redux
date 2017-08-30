import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const postsReducer = (state = initialState.postsReducer, action) => {
    switch(action.type) {
        case ActionType.LOAD_POSTS: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.courses into a new array.
            // The return object is a copy of state and overwrites the state.courses with a fresh clone of action.courses
            return {
                ...state, 
                posts: _.assign(action.posts)
            };
        }


        default: { return state; }
    }
};



export default postsReducer;