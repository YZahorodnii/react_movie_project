import React, {FC} from 'react';

import {IMovie} from "../../interfaces";
import {PosterPreview} from "../PosterPreview";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {moviesActions} from "../../redux/slices";

interface IProps {
    movie: IMovie
}
const MovieListCard: FC<IProps> = ({movie}) => {
    let {id, overview, genre_ids, title, vote_average} = movie;
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const toMovieInfo = () => {
        navigate(`/movies/${id}`)
        dispatch(moviesActions.setMovieId(id))
    }

    return (
        <div>
            {/*<NavLink to={`/movies/${id}`}><PosterPreview/></NavLink>*/}
            <div onClick={toMovieInfo}><PosterPreview/></div>
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

export {MovieListCard};