import * as actionTypes from './actionTypes';
import AxiosConfig from '../AxiosConfig';

export const requestFetchCategories = () => {
    return {
        type: actionTypes.REQUEST_CATEGORIES,
    }
}
export const fetchCategoriesSuccess = (categories: []) => {
    return {
        type: actionTypes.LOAD_CATEGORIES_SUCCESS,
        categories
    }
}
export const fetchCategoriesFailed = () => {
    return {
        type: actionTypes.LOAD_CATEGORIES_FAILED
    }
}

export const fetchCategories = () => {
    return (dispatch:any) => {
      dispatch(requestFetchCategories());
  
      return AxiosConfig.get('api_category.php')
        .then(r => {            
          dispatch(fetchCategoriesSuccess(r.data.trivia_categories));
        })
        .catch(e => {
          console.log('received error', e);
          dispatch(fetchCategoriesFailed());
          //TODO make proper error handling
          let message = 'Грешка при извличане на категории';
          if (e.response) {
            switch (e.response.status) {
              case 400:
                message = e.response.data.message;
                break;
              default:
                message = "";
            }
          }
  
          if (message === 'search.query.bad') {
            message = 'Невалиден критерии за търсене, променете критерия си';
          }
  
        //   toastr.error('Грешка', message);
        })
    }
  }