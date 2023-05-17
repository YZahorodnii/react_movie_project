import React, {FC, useEffect} from 'react';
import {Badge} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genresService} from "../../services";
import {genreActions} from "../../redux/slices";

const GenreBadge: FC = () => {
    const dispatch = useAppDispatch();
    const {genresId} = useAppSelector(state => state.moviesReducer);
    const {genres} = useAppSelector(state => state.genresReducer);

    useEffect(() => {
        genresService.getGenres().then(value => value.data).then(value => dispatch(genreActions.setGenres(value)))
        // console.log('::::GENRES FETCHED::::')
    }, [dispatch])

    // console.log(genresId);
    // console.log(genres);
    let movieGenre = [];
    for (const genreId of genresId) {
        for (const genre of genres) {
            if (genreId === genre.id) {
                movieGenre.push(genre.name)
            }
        }
    }
    // dispatch(genreActions.setGenresForMovie(movieGenre))
    // console.log(movieGenre);




    return (
        <div>

            {movieGenre.map(item => <Badge bg={"primary"}>{item}</Badge>)}
        </div>
    );
};

export {GenreBadge};