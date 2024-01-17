import * as actionTypes from '../../actions/actionTypes';

import { QuestionType } from '../../utils/types/Questions';

const questionsReducers = (state:QuestionType = {
  categoryTypes: {id:0,name:'Choose category'},
  difficulty: 'Choose difficulty',
  isFetching: false,
  questions: []
}, action: any) => {
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

    case actionTypes.REQUEST_QUESTIONS: {
      return Object.assign({}, state, {
        isFetching: true
      })
    }

    case actionTypes.LOAD_QUESTIONS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        questions: action.questions,
      })
    }

    case actionTypes.LOAD_QUESTIONS_FAILED: {
      return Object.assign({}, state, {
        isFetching: false,
        questions: []
      })
    }
    default:
      return state;
  }
}
export default questionsReducers;