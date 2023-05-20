import {createSlice} from "@reduxjs/toolkit";
import {IGenre} from "../../interfaces";

interface IState {
    genres: IGenre[],
    selectedGenreId: number,
    selectedGenreName: string,
    idFromBadge: number
}

const initialState: IState = {
    genres: [],
    selectedGenreId: null,
    selectedGenreName: null,
    idFromBadge: null
}

let slice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenres: (state, action) => {
            const {genres} = action.payload
            state.genres = genres
        },
        setSelectedGenreId: (state, action) => {
            state.selectedGenreId = action.payload
        },
        setSelectedGenreName: (state, action) => {
            state.selectedGenreName = action.payload
        },
        setIdFromBadge: (state, action) => {
            state.idFromBadge = action.payload
        }
    }
});

let {reducer: genresReducer, actions} = slice;
const genreActions = {
    ...actions
}

export {genreActions, genresReducer}