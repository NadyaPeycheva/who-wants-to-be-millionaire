import * as actionTypes from '../../actions/actionTypes';

const categoryReducers= (state = {
    isFetching: false,
    categories: [],
  }, action:any) => {
    switch (action.type) {
      case actionTypes.REQUEST_CATEGORIES: {
        return Object.assign({}, state, {
          isFetching: true
        });
      }
      case actionTypes.LOAD_CATEGORIES_SUCCESS: {
        return Object.assign({}, state, {
          categories: action.categories,
          isFetching: false
        })
      }
      case actionTypes.LOAD_CATEGORIES_FAILED: {
        return Object.assign({}, state, {
          categories: [],
          isFetching: false
        })
      }
      default:
        return state;
    }
  }
  export default categoryReducers;