import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const categoriesReducer = (state = initialState.categoriesReducer, action) => {
    switch(action.type) {
        case ActionType.LOAD_CATEGORIES:
            return {...state, categories: Object.assign([], action.categories)};

        default: return state;
    }
};


export default categoriesReducer;