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
    let {id, overview, genre_ids, title, vote_average, poster_path, backdrop_path} = movie;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const toMovieInfo = () => {
        navigate(`/movies/${id}`)
        dispatch(moviesActions.setPoster(poster_path))
        dispatch(moviesActions.setVoteRating(vote_average))
        dispatch(moviesActions.setDescription(overview))
        dispatch(moviesActions.setGenresId(genre_ids))
        dispatch(moviesActions.setBackdropPath(backdrop_path))
    }

    const fakePoster = 'https://irs.www.warnerbros.com/gallery-v2-jpeg/unknown_posterlarge_1-796659102.jpg'

    return (
        <div className="col">
            <div className="card h-100">
                <img className="card-img-top" style={{cursor: 'pointer'}} width={150} onClick={toMovieInfo}
                     src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : fakePoster} alt="Poster"/>
                <div className="card-body">
                    <div className="card-title" style={{cursor: 'pointer'}} onClick={toMovieInfo}>
                        {title}
                    </div>
                    <div className="card-text">
                        {overview}
                        <Rater total={10} interactive={false} rating={vote_average}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieByGenres};