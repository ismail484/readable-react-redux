import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const categoryReducer = (state = initialState.categoryReducer, action) => {
    switch(action.type) {
        case ActionType.LOAD_CATEGORIES:
            return {...state, categories: Object.assign([], action.categories)};

        default: return state;
    }
};


export default categoryReducer;