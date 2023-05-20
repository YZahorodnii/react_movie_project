import React from 'react';
import Rater from "react-rater";
import 'react-rater/lib/react-rater.css'

import {useAppSelector} from "../../hooks";

const StarsRating = () => {
    const {rating} = useAppSelector(state => state.moviesReducer);
    return (
        <div>
            <Rater total={10} interactive={false} rating={rating}/>
        </div>
    );
};

export {StarsRating};