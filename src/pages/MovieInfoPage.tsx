import React from 'react';
import {MovieInfo} from "../components/MovieInfo";
import {PosterPreview} from "../components/PosterPreview";


const MovieInfoPage = () => {
    return (
        <div>
            <PosterPreview/>
            <MovieInfo/>
        </div>
    );
};

export {MovieInfoPage};