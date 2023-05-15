import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {GenresPage, HomePage, MoviesPage} from "./pages";
import {MainLayout} from "./layouts";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/home'}/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/genres'} element={<GenresPage/>}/>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
