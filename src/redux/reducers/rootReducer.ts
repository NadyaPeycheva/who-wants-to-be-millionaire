import { combineReducers } from 'redux';

import questionsReducers from "./questionsReducers";
import answersReducers from './answersReducers';

import { QuestionsType } from '../types/Questions';
import { AnswersStateType } from '../types/AnwersType';

export type RootReducerType = {
    questions: QuestionsType;
    answers: AnswersStateType
};

const rootReducer =
    combineReducers({
        questions: questionsReducers,
        answers: answersReducers
    });

export default rootReducer;