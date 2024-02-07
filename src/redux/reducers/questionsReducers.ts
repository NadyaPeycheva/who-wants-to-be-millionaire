import { PayloadAction, bindActionCreators, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { QuestionsType } from '../types/Questions';
import { QuestionDataType } from '../types/Questions';

import { useAppDispatch } from '../store';
import { fetchQuestionsApi } from '../../api/questionsApi';


export const fetchQuestions = createAsyncThunk<[], QuestionDataType>(
  'questions/fetchQuestionsStatus',
  async (dataQuestion) => {
    try {
      const response = await fetchQuestionsApi(dataQuestion.id, dataQuestion.difficulty);
      return response;
    } catch (error) {
    }
  }
);

const initialState: QuestionsType = {
  questions: []
}

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<[]>) => {
      return { ...state, questions: action.payload }
    })
  }
})

export const questionsActions = questionsSlice.actions;

export const useQuestionsActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(questionsActions, dispatch);
};

export default questionsSlice.reducer;
