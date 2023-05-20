import {createSlice} from "@reduxjs/toolkit";
import {IMovie, IVideo} from "../../interfaces";

interface IState {
    movies: IMovie[],
    poster: HTMLImageElement,
    backdrop_path: string,
    rating: number,
    description: string,
    genresId: [],
    themeTrigger: boolean,
    searchKey: string,
    totalPages: number,
    videos: IVideo[],
    videoKey: string
}

const initialState: IState = {
    movies: [],
    poster: null,
    backdrop_path: null,
    rating: null,
    description: null,
    genresId: [],
    themeTrigger: false,
    searchKey: '',
    totalPages: null,
    videos: [],
    videoKey: null
}

let slice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            const {results, total_pages} = action.payload
            state.movies = results
            state.totalPages = total_pages
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
        setGenresId: (state, action) => {
            state.genresId = action.payload
        },
        setThemeTrigger: state => {
            state.themeTrigger = !state.themeTrigger
        },
        setSearchKey: (state, action) => {
            state.searchKey = action.payload
        },
        setBackdropPath: (state, action) => {
            state.backdrop_path = action.payload
        },
        setVideos: (state, action) => {
            const {results} = action.payload
            state.videos = results
        },
        setVideoKey: (state, action) => {
            state.videoKey = action.payload
        }
    }
});

let {reducer: moviesReducer, actions} = slice;

const moviesActions = {
    ...actions,
    // getAllMovies
}

export {moviesActions, moviesReducer}