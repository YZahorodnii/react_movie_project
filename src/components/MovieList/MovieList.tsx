import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux/slices";
import {MovieListCard} from "../MovieListCard";
import {MovieListPagination} from "./MovieListPagination";

const MovieList: FC = () => {
    let {movies} = useAppSelector(state => state.moviesReducer);
    let dispatch = useAppDispatch();
    let [query,] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getAllMovies())
    }, [dispatch, query])
    return (
        <div>
            <MovieListPagination/>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieList};