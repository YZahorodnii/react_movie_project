import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresReducer, moviesReducer} from "./slices";

let rootReducer = combineReducers({
    moviesReducer,
    genresReducer
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