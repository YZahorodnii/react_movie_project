import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IState{
    movies: IMovie[],
    currentPage: number,
    movieIdFromMovies: number,
    movieIdFromGenre: number,
    pathPoster: string,
    poster: HTMLImageElement,
    rating: number,
    votes: number,
    description: string,
    genresId: [],
    themeTrigger: boolean
}

const initialState: IState = {
    movies: [],
    currentPage: null,
    movieIdFromMovies: null,
    movieIdFromGenre: null,
    pathPoster: null,
    poster: null,
    rating: null,
    votes: null,
    description: null,
    genresId: [],
    themeTrigger: false
}

// const getAllMovies = createAsyncThunk<IMovie, void>(
//     'moviesSlice/getAll',
//    async (_, {rejectWithValue}) => {
//         try {
//             const {data} = await moviesService.getMovies();
//             return data
//         } catch (e) {
//             const err = e as AxiosError
//             // @ts-ignore
//             return rejectWithValue(err.response.data)
//         }
//     }
// )

let slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {results} = action.payload
            state.movies = results
        },
        setMovieIdFromMovies: (state, action) => {
            state.movieIdFromMovies = action.payload
        },
        setMovieIdFromGenre: (state, action) => {
            state.movieIdFromGenre = action.payload
        },
        setPathPoster: (state, action) => {
            state.pathPoster = action.payload
        },
        setPoster: (state, action) => {
            state.poster = action.payload
        },
        setVoteRating: (state, action) => {
            state.rating = action.payload
        },
        setDescription: (state, action) => {
            state.description = action.payload
        },
        setVotes: (state, action) => {
            state.votes = action.payload
        },
        setGenresId: (state, action) => {
            state.genresId = action.payload
        },
        setThemeTrigger: state => {
            state.themeTrigger = !state.themeTrigger
        }
        /*,
        extraReducers: builder => {
            builder.addCase(getAllMovies.fulfilled, (state, action) => {
               const {page, results} = action.payload
                state.movies = results
                state.page = page
            })}*/
    }
});

let {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    // getAllMovies
}

export {moviesActions, moviesReducer}