import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux/slices";

const Header: FC = () => {
    const {themeTrigger} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const themeSwitcher = () => {
        dispatch(moviesActions.setThemeTrigger())
    }
    return (
        <div className={themeTrigger ? css.Dark : css.Light}>
            <NavLink className="nav-link" to={'/home'}>MoviesProProject</NavLink>
            <NavLink className="nav-link" to={'/genres'}>Genres</NavLink>
            <NavLink className="nav-link" onClick={() => dispatch(moviesActions.setSearchKey(''))}
                     to={'/movies?page=1'}>All Movies</NavLink>
            <NavLink className="nav-link" to={'/home'}><img className={css.Avatar}
                                                            src="https://www.w3schools.com/w3images/avatar2.png"
                                                            alt="avatar"/></NavLink>
            <button className="btn btn-outline-light" onClick={themeSwitcher}>{themeTrigger ? 'LIGHT' : 'DARK'}</button>
        </div>
    );
};

export {Header};