import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux/slices";
import {MovieListCard} from "../MovieListCard";
import {MovieListPagination} from "./MovieListPagination";
import {moviesService} from "../../services";

const MovieList: FC = () => {
    let {movies} = useAppSelector(state => state.moviesReducer);
    let dispatch = useAppDispatch();
    let [query, setQuery] = useSearchParams();
    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}))
    }, [])
    const queryGetPage = +query.get('page')===0?1:+query.get('page')
    useEffect(() => {
        // dispatch(moviesActions.getAllMovies())
        moviesService.getMovies(queryGetPage).then(value => value.data).then(value => dispatch(moviesActions.setMovies(value)))
        console.log(queryGetPage);
    }, [dispatch, query])
    return (
        <div>
            <MovieListPagination/>
            {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MovieList};