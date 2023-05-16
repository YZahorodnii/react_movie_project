import {createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";

interface IState {
    genres: IGenre[],
    selectedGenre: number
}

const initialState: IState = {
    genres: [],
    selectedGenre: null
}

let slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenres: (state, action) => {
            const {genres} = action.payload
            state.genres = genres
        },
        setSelectedGenre: (state, action) => {
            state.selectedGenre = action.payload
        }
    }
});

let {reducer: genresReducer, actions} = slice;
const genreActions = {
    ...actions
}

export {genreActions, genresReducer}