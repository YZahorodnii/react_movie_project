import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {urls} from "../../constants";
import css from '../MovieList/Poster.module.css'

interface IProps {
    movie: IMovie
}
const MovieListCard: FC<IProps> = ({movie}) => {
    let {id, overview, genre_ids, title, poster_path, vote_average} = movie;
    return (
        <div>
            <div>{id}</div>
            <div>{overview}</div>
            <div>genre:{genre_ids}</div>
            <div>{title}</div>
            <div className={css.Poster}><img src={urls.posters.posters + poster_path} alt="movie poster"/></div>
            <div>{vote_average}</div>
            <br/>
        </div>
    );
};

export {MovieListCard};