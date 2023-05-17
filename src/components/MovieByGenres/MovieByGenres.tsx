import React, {FC} from 'react';
import {IMovie} from "../../interfaces";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {moviesActions} from "../../redux/slices";
import Rater from "react-rater";

interface IProps {
    key: number,
    movie: IMovie
}

const MovieByGenres: FC<IProps> = ({movie}) => {
    let {id, overview, genre_ids, title, vote_average, poster_path, vote_count} = movie;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const toMovieInfo = () => {
        navigate(`/movies/${id}`)
        dispatch(moviesActions.setMovieIdFromGenre(id))
        dispatch(moviesActions.setPoster(poster_path))
        dispatch(moviesActions.setVoteRating(vote_average))
        dispatch(moviesActions.setDescription(overview))
        dispatch(moviesActions.setVotes(vote_count))
        dispatch(moviesActions.setGenresId(genre_ids))
    }

    return (
        <div>
            <img style={{cursor:'pointer'}} width={150} onClick={toMovieInfo} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="Poster"/>
            <div style={{cursor:'pointer'}} onClick={toMovieInfo}>{title}</div>
            <div>{overview}</div>
            <Rater total={10} interactive={false} rating={vote_average}/>
            <br/>
        </div>
    );
};

export {MovieByGenres};