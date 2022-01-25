import { createStore,combineReducers,applyMiddleware } from "redux";
// import { createSlice, configureStore,createStore,combineReducer,applyMiddleware } from '@reduxjs/toolkit'

import thunk from "redux-thunk";
import userReducer from "./reducers";

const rootReducer=combineReducers({userReducer});


export const Store=createStore(rootReducer,applyMiddleware(thunk));