import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {genreActions} from "../../redux/slices";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();

    const {id, name} = genre;

    let genreName = name.toLowerCase().split('').filter(e => e.trim().length).join('')
    const handleLinkClick = () => {
        dispatch(genreActions.setSelectedGenreName(genreName))
        dispatch(genreActions.setSelectedGenreId(id))
    }

    return (
        <div className="nav-item">
            <NavLink onClick={handleLinkClick} to={`/genres/${genreName}`}>
                <button type="button" className="btn btn btn-success">{name}</button>
            </NavLink>
        </div>
    );
};

export {Genre};