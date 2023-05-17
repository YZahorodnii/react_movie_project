import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {genreActions, moviesActions} from "../../redux/slices";
import {Badge} from "react-bootstrap";

interface IProps {
    genre: IGenre
}


const Genre: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();

    const {id, name} = genre;

    let genreName = name.toLowerCase().split('').filter(e => e.trim().length).join('')
    const handleLinkClick  = (event: React.MouseEvent<HTMLElement>) => {
        // event.preventDefault()
        dispatch(genreActions.setSelectedGenreName(genreName))
        dispatch(genreActions.setSelectedGenreId(id))
    }

    return (
        <div>
            <NavLink onClick={handleLinkClick} to={`/genres/${genreName}`}><Badge>{name}</Badge></NavLink>
        </div>
    );
};

export {Genre};