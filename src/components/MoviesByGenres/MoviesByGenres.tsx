import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services";
import {moviesActions} from "../../redux/slices";
import {MovieByGenres} from "../MovieByGenres";

const MoviesByGenres = () => {
    const {selectedGenre} = useAppSelector(state => state.genresReducer);
    const {movies} = useAppSelector(state => state.moviesReducer);
    console.log(selectedGenre);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery(prev => ({...prev, with_genre: `${selectedGenre}`, page: '1'}))
    }, [])

    let queryPage = +query.get('page')===0?1:+query.get('page')

    const dispatch = useAppDispatch();

    useEffect(() => {
        moviesService.getMoviesByGenre(selectedGenre, queryPage).then(value => value.data).then(value => dispatch(moviesActions.setMovies(value)))
    }, [dispatch, selectedGenre, query])
    return (
        <div>
            {movies.map(movie => <MovieByGenres movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MoviesByGenres};