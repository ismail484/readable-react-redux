import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


const selectedPostReducer = (state = initialState.selectedPostReducer, action) => {
    switch(action.type) {

        case ActionType.LOAD_POST: {
            return {
                ...state,
                post: _.assign(action.post)
            };
        }


        default: { return state; }
    }
};


export default selectedPostReducer;