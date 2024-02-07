import { bindActionCreators, createSlice } from "@reduxjs/toolkit"
import { useAppDispatch } from "../store"

import { AnswersStateType } from "../types/AnwersType"

const initialState: AnswersStateType = {
    correctAnswers: 0
}

export const answersSlice = createSlice({
    name: "answers",
    initialState,
    reducers: {

        countCorrectAnswers: (state) => {
            return { ...state, correctAnswers: state.correctAnswers + 1 }
        }
    }
})

export const answersActions = answersSlice.actions;

export const useAnswersActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(answersActions, dispatch);
};

export default answersSlice.reducer;