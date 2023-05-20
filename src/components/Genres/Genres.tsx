import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresService} from "../../services";
import {genreActions} from "../../redux/slices";
import {Genre} from "../Genre";
import css from './Genre.module.css'

const Genres: FC = () => {
    let {genres} = useAppSelector(state => state.genresReducer);
    let dispatch = useAppDispatch();

    useEffect(() => {
        genresService.getGenres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
    }, [dispatch])

    return (
        <div className={css.Genre}>
            {genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};