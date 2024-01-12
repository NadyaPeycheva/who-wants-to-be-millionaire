import * as actionTypes from './actionTypes';
import AxiosConfig from '../AxiosConfig';

export const getCategoryTypes = (types: { name: string, id: number }) => {
    return {
        type: actionTypes.GET_CATEGORY_TYPES,
        types
    }
}
export const getDifficultyTypes = (difficultyType: string) => {
    return {
        type: actionTypes.GET_DIFFICULTY_TYPE,
        difficultyType
    }
}

export const requestFetchQuestions = () => {
    return {
        type: actionTypes.REQUEST_QUESTIONS,
    }
}
export const fetchQuestionsSuccess = (questions: []) => {
    return {
        type: actionTypes.LOAD_QUESTIONS_SUCCESS,
        questions
    }
}
export const fetchQuestionsFailed = () => {
    return {
        type: actionTypes.LOAD_QUESTIONS_FAILED
    }
}

export const fetchQuestions = (categoryId:number,difficulty:string) => {
    return (dispatch:any) => {
      dispatch(requestFetchQuestions());
  
      return AxiosConfig.get(`api.php?amount=15&category=${categoryId}&difficulty=${difficulty}`)
        .then(r => {                        
          dispatch(fetchQuestionsSuccess(r.data.results));
        })
        .catch(e => {
          console.log('received error', e);
          dispatch(fetchQuestionsFailed());
          //TODO make proper error handling
          let message = 'Грешка при извличане на въпроси';
          if (e.response) {
            switch (e.response.status) {
              case 400:
                message = e.response.data.message;
                break;
              default:
                message = "";
            }
          }
  
        //   toastr.error('Грешка', message);
        })
    }
  }