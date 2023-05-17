import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {moviesActions} from "../../redux/slices";

const Header:FC = () => {
    const {themeTrigger} = useAppSelector(state => state.moviesReducer);
    const dispatch = useAppDispatch();
    const themeSwitcher = () => {
        dispatch(moviesActions.setThemeTrigger())
    }
    return (
        <div className={themeTrigger?css.Header:css.HeaderLight}>
            <NavLink to={'/home'}>Movies Pro Project</NavLink>
            <NavLink to={'/home'}><img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar"/></NavLink>
            <NavLink to={'/movies'}>All Movies</NavLink>
            <button onClick={themeSwitcher}>{themeTrigger?'DARK':'LIGHT'}</button>
        </div>
    );
};

export {Header};