import React, {FC} from 'react';

import {MoviesByGenres} from "../components/MoviesByGenres";
import {MoviesByGenresPagination} from "../components/MoviesByGenres";

const MoviesByGenrePage: FC = () => {
    return (
        <div>
            <MoviesByGenresPagination/>
            <MoviesByGenres/>
        </div>
    );
};

export {MoviesByGenrePage};