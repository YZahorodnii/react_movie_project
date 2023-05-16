import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import {MoviesByGenrePage} from "./pages";
import {MovieInfoPage} from "./pages/MovieInfoPage";
import {useAppSelector} from "./hooks";

function App() {

    const {movieId} = useAppSelector(state => state.moviesReducer);
    const {selectedGenreName} = useAppSelector(state => state.genresReducer);

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/home'}/>}/>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/genres'} element={<GenresPage/>}/>
                    <Route path={`genres/${selectedGenreName}`} element={<MoviesByGenrePage/>}/>
                    <Route path={`movies/${movieId}`} element={<MovieInfoPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
