import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header:FC = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/home'}>Movies Pro Project</NavLink>
            <NavLink to={'/home'}><img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar"/></NavLink>
            <NavLink to={'/movies'}>All Movies</NavLink>
        </div>
    );
};

export {Header};