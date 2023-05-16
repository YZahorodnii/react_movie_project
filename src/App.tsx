import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {MoviesByGenrePage} from "./pages";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/genres'} element={<GenresPage/>}/>
                    <Route path={'genres/action'} element={<MoviesByGenrePage/>}/>
                    <Route path={'genres/adventure'} element={<MoviesByGenrePage/>}/>
                    <Route path={'genres/animation'} element={<MoviesByGenrePage/>}/>
                    <Route path={'genres/comedy'} element={<MoviesByGenrePage/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
