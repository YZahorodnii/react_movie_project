import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

const MovieListPagination: FC = () => {
    let [query, setQuery] = useSearchParams();
    const next = async () => {
        await setQuery(prev => ({...prev, page: +prev.get('page')+1}))
    }

    const queryPage = +query.get('page')


    const prev = async () => {
        await setQuery(prev => ({...prev, page: +prev.get('page')-1}))
    }

    return (
        <div>
            <button disabled={queryPage===1} onClick={prev}>prev</button>
            {+query.get('page')}
            <button onClick={next}>next</button>
        </div>
    );
};

export {MovieListPagination};