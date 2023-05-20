import React, {FC} from 'react';

import {StarsRating} from "../StarsRating";
import {PosterPreview} from "../PosterPreview";
import {useAppSelector} from "../../hooks";
import {GenreBadge} from "../GenreBadge";
import css from './MovieInfo.module.css'


const MovieInfo: FC = () => {
    const {description, backdrop_path, themeTrigger} = useAppSelector(state => state.moviesReducer);

    return (
        <div className={themeTrigger ? css.Dark : css.Light}>
            <PosterPreview/>
            <div>
                <GenreBadge/>
                Rating(/10):
                <StarsRating/>
                Overview:
                <div>{description}</div>
                Images:
                <div><img width={300}
                          src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : 'https://irs.www.warnerbros.com/gallery-v2-jpeg/unknown_posterlarge_1-796659102.jpg'}
                          alt="Backdrop Poster"/></div>
            </div>
        </div>
    );
};

export {MovieInfo};