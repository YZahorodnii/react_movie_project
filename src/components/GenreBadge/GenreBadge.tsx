import React, {FC, useEffect} from 'react';
import {Badge} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresService} from "../../services";
import {genreActions} from "../../redux/slices";
import {NavLink} from "react-router-dom";
import css from './Badge.module.css'

const GenreBadge: FC = () => {
    const dispatch = useAppDispatch();
    const {genresId} = useAppSelector(state => state.moviesReducer);
    const {genres} = useAppSelector(state => state.genresReducer);

    useEffect(() => {
        genresService.getGenres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
    }, [dispatch])

    let movieGenre = [];
    for (const genreId of genresId) {
        for (const genre of genres) {
            if (genreId === genre.id) {
                movieGenre.push(genre)
            }
        }
    }

    return (
        <div className={css.Badge}>

            {movieGenre.map(item =>
                <NavLink to={`/genres/${item.name}`} onClick={() => {
                    dispatch(genreActions.setSelectedGenreName(item.name));
                    dispatch(genreActions.setSelectedGenreId(item.id))
                }}><Badge key={item.id} bg={"primary"}>{item.name}</Badge></NavLink>
            )
            }
        </div>
    );
};

export {GenreBadge};