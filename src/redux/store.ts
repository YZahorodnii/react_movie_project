import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices";

let rootReducer = combineReducers({
    movies: moviesReducer
    });

let setupStore = () => configureStore({
    reducer: rootReducer
});


type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export {setupStore}

export type {
    RootState, AppDispatch, AppStore
}