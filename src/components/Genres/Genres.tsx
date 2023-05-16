import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresService} from "../../services";
import {genreActions} from "../../redux/slices";
import {Genre} from "../Genre";

const Genres: FC = () => {

    let {genres} = useAppSelector(state => state.genresReducer);
    let dispatch = useAppDispatch();

    useEffect(() => {
        genresService.getGenres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
    }, [dispatch])

    return (
        <div>
            {genres.map(genre => <Genre genre={genre} id={genre.id}/>)}
        </div>
    );
};

export {Genres};