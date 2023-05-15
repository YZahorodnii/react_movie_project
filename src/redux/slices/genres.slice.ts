import {createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";

interface IState {
    genres: IGenre[]
}

const initialState: IState = {
    genres: []
}

let slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

let {reducer: genresReducer, actions} = slice;
const genreActions = {
    ...actions
}

export {genreActions, genresReducer}