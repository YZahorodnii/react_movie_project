import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

interface IState{
    movies: IMovie[],
    currentPage: number,
    movieId: number
}

const initialState: IState = {
    movies: [],
    currentPage: null,
    movieId: null
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
        setMovieId: (state, action) => {
            state.movieId = action.payload
        }
    }/*,
    extraReducers: builder => {
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
           const {page, results} = action.payload
            state.movies = results
            state.page = page
        })}*/
});

let {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    // getAllMovies
}

export {moviesActions, moviesReducer}