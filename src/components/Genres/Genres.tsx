import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresService} from "../../services";
import {genreActions} from "../../redux/slices";
import {Genre} from "../Genre";

const Genres: FC = () => {
    console.log(':::::::GENRES START');
    let {genres} = useAppSelector(state => state.genresReducer);
    let dispatch = useAppDispatch();

    useEffect(() => {
        genresService.getGenres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
        console.log('::::GENRES FETCHED::::')
    }, [dispatch])

    return (
        <div>
            {genres.map(genre => <Genre genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {Genres};