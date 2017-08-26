import * as ActionType from './ActionType';
import AuthorApi from '../api/AuthorApi';
import { ApiCallBeginAction } from './ApiAction';


export const getCategoriesResponse = categories => ({
    type: ActionType.GET_CATEGORIES,
    categories
});



export function getAuthorsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return CategoryApi.getAllCategories()
            .then(authors => {
                dispatch(getCategoriesResponse(categories));
            }).catch(error => {
                throw error;
            });
    };
}
