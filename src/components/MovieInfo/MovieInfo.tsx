import React, {FC} from 'react';
import {StarsRating} from "../StarsRating";
import {PosterPreview} from "../PosterPreview";
import {useAppSelector} from "../../hooks";
import {GenreBadge} from "../GenreBadge";

const MovieInfo: FC = () => {
    const {description} = useAppSelector(state => state.moviesReducer);
    return (
        <div>
            <PosterPreview/>
            <StarsRating/>
            <GenreBadge/>
            <div>{description}</div>
        </div>
    );
};

export {MovieInfo};