import React, {FC} from 'react';
import {SearchMovies} from "../components/SearchMovies";
import {MovieList} from "../components/MovieList";
import css from './Home.module.css'

const HomePage: FC = () => {

    return (
        <div>
            <div className={css.Home}>
                <SearchMovies/>
            </div>
            Top rated movies:
                <MovieList/>
        </div>
    );
};

export {HomePage};