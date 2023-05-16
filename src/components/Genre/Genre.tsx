import React, {FC} from 'react';
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../hooks";
import {genreActions} from "../../redux/slices";

interface IProps {
    genre: IGenre
    id: number
}


const Genre: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();

    const {id, name} = genre;
    const handleLinkClick  = (event: React.MouseEvent<HTMLElement>) => {
        // event.preventDefault()
        dispatch(genreActions.setSelectedGenre(id))
    }

    return (
        <div>
            <NavLink onClick={handleLinkClick} to={`/genres/${name.toLowerCase()}`}><div>{name}</div></NavLink>
        </div>
    );
};

export {Genre};