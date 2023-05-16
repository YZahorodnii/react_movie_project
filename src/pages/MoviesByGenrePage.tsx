import React, {FC} from 'react';

import {MoviesByGenres} from "../components/MoviesByGenres";
import {MoviesByGenresPagination} from "../components/MoviesByGenres/MoviesByGenresPagination";

//https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1

const MoviesByGenrePage: FC = () => {
    return (
        <div>
            <MoviesByGenresPagination/>
            <MoviesByGenres/>
        </div>
    );
};

export {MoviesByGenrePage};