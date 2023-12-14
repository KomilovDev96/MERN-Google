import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { thunk } from 'redux-thunk'
import userReducers from "./reducers/userReducers";
import fileReducers from "./reducers/fileReducers";

const rootReducer = combineReducers({
    user: userReducers,
    file: fileReducers
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))