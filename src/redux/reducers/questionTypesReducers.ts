import * as actionTypes from '../../actions/actionTypes';

const questionTypesReducers= (state = {
    categoryTypes: {},
    difficulty:''
  }, action:any) => {
    switch (action.type) {
      case actionTypes.GET_CATEGORY_TYPES: {
        return Object.assign({}, state, {
          categoryTypes: action.types,
        });
      }
      
      case actionTypes.GET_DIFFICULTY_TYPE: {
        return Object.assign({}, state, {
          difficulty: action.difficultyType,
        })
      }
      default:
        return state;
    }
  }
  export default questionTypesReducers;