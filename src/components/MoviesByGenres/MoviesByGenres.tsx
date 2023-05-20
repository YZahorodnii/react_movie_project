import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import {moviesService} from "../../services";
import {moviesActions} from "../../redux/slices";
import {MovieByGenres} from "../MovieByGenres";

const MoviesByGenres = () => {
    const {selectedGenreId} = useAppSelector(state => state.genresReducer);
    const {movies} = useAppSelector(state => state.moviesReducer);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        setQuery(prev => ({...prev, with_genre: `${selectedGenreId}`, page: '1'}))
    }, [])

    let queryPage = +query.get('page') === 0 ? 1 : +query.get('page')

    const dispatch = useAppDispatch();

    useEffect(() => {

        moviesService.getMoviesByGenre(selectedGenreId, queryPage).then(value => value.data).then(value => dispatch(moviesActions.setMovies(value)))

    }, [dispatch, selectedGenreId, query])
    return (
        <div className="row row-cols-1 row-cols-md-5 g-4">
            {movies.map(movie => <MovieByGenres movie={movie} key={movie.id}/>)}
        </div>
    );
};

export {MoviesByGenres};