import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

const MovieListPagination: FC = () => {
    let [,setQuery] = useSearchParams();

    const prevPage = () => {
        // @ts-ignore
        setQuery(prev1 => ({...prev1, page: +prev1.get('page')-1})
        )};

    const nextPage = () => {
        // @ts-ignore
        setQuery(prev1 => ({...prev1, page: +prev1.get('page')+1}))
    }

    return (
        <div>
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};

export {MovieListPagination};