import React, {FC} from 'react';
import {MovieList} from "../components/MovieList";
import {NavLink} from "react-router-dom";

const MoviesPage: FC = () => {
    return (
        <div>
            <NavLink to={'/genres'}>Genres</NavLink>
            <MovieList/>
        </div>
    );
};

export {MoviesPage};