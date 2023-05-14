import {createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/IMovie";

interface IState{
    movies: IMovie[],
    loading: false,
    error: null
}


const initialState: IState = {
    movies: [],
    loading: false,
    error: null
}

let slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

let {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions
}

export {moviesActions, moviesReducer}