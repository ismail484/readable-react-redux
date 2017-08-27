import * as ActionType from './ActionType';
import CategoryApi from '../api/CategoryApi';
import { ApiCallBeginAction } from './ApiAction';


export const getCategoriesResponse = categories => ({
    type: ActionType.LOAD_CATEGORIES,
    categories
});



export function getCategoriesAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return CategoryApi.getAllCategories()
            .then(categories => {
                dispatch(getCategoriesResponse(categories));
            }).catch(error => {
                throw error;
            });
    };
}
