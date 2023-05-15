import React, {FC} from 'react';
import {Header} from "../components/Header";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};