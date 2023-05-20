import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {moviesActions} from "../../redux/slices";
import {MovieListCard} from "../MovieListCard";
import {MovieListPagination} from "./MovieListPagination";
import {moviesService, searchService} from "../../services";
import css from './MovieList.module.css'

const MovieList: FC = () => {
        let {movies, searchKey} = useAppSelector(state => state.moviesReducer);
        let dispatch = useAppDispatch();
        let [query, setQuery] = useSearchParams();
        useEffect(() => {
            setQuery(prev => ({...prev, page: '1'}))
        }, [])

        const queryGetPage = +query.get('page') === 0 ? 1 : +query.get('page')
        const location = useLocation();
        const navigate = useNavigate();

        useEffect(() => {
                if (searchKey.length === 0 && location.pathname === '/movies') {
                    moviesService.getMovies(queryGetPage).then(value => value.data).then(value => dispatch(moviesActions.setMovies(value)))
                } else if (searchKey.length > 0 && location.pathname === '/search') {
                    searchService.getMovies(queryGetPage, searchKey).then(value => value.data).then(value => dispatch(moviesActions.setMovies(value)))
                } else if (location.pathname === '/home') {
                    moviesService.getMoviesRated().then(value => value.data).then(value => dispatch(moviesActions.setMovies(value)))
                }

            }, [dispatch, query]
        )

        const error = 'We can\'t find any movie with such keyword. Please check spelling and try new search'

        return (
            <div>
                {location.pathname !== '/home' && <MovieListPagination/>}
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {movies.length ? movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)
                        : <h2>{error}</h2>}
                </div>
                {location.pathname !== '/home' &&
                    <button className={css.Search} onClick={() => navigate('/home')}>new search</button>}
            </div>
        );
    }
;

export {MovieList};