import React, {FC} from 'react';
import {Header} from "../components/Header";
import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'
import {useAppSelector} from "../hooks";

const MainLayout: FC = () => {
    const {themeTrigger} = useAppSelector(state => state.moviesReducer);
    return (
        <div className={themeTrigger ? css.Dark : css.Light}>
            <div className="fixed-top">
                <Header/>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};