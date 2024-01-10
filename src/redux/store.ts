import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

import categoryReducers from "./reducers/categoryReducers";
import questionTypesReducers from "./reducers/questionTypesReducers";

const middlewareStore=applyMiddleware(thunk);

const store = createStore(
    combineReducers({
      categories: categoryReducers,
      questionTypes:questionTypesReducers
    }),
    middlewareStore
);

export default store;