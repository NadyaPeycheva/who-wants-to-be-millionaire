import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

import categoryReducers from "./reducers/categoryReducers";
import questionsReducers from "./reducers/questionsReducers";

const middlewareStore=applyMiddleware(thunk);

const store = createStore(
    combineReducers({
      categories: categoryReducers,
      questions:questionsReducers
    }),
    middlewareStore
);

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;