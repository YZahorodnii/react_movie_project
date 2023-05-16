import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview";

interface IProps {
    key: number,
    movie: IMovie
}
const MovieByGenres: FC<IProps> = ({movie}) => {
    let {id, overview, genre_ids, title, vote_average} = movie;
    return (
        <div>
            <PosterPreview/>
            <div>{id}</div>
            <div>{overview}</div>
            <div>genre:{genre_ids}</div>
            <div>{title}</div>
            {/*<div className={css.Poster}><img src={urls.posters.posters + poster_path} alt="movie poster"/></div>*/}
            <div>{vote_average}</div>
            <br/>
        </div>
    );
};

export {MovieByGenres};