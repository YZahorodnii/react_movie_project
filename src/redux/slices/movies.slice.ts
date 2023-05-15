import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";

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

const getAllMovies = createAsyncThunk<IMovie, void>(
    'moviesSlice/getAll',
   async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)


let slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        /*setAllMovies: (state, action) => {
            const {results} = action.payload
            state.movies = results
        }*/
    },
    extraReducers: builder => {
        builder.addCase(getAllMovies.fulfilled, (state, action) => {
           const {results} = action.payload
            state.movies = results
        })}
});

let {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    getAllMovies
}

export {moviesActions, moviesReducer}