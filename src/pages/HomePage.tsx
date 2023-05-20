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
                <MovieList/>
        </div>
    );
};

export {HomePage};