import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

const MoviesByGenresPagination: FC = () => {
    const [query, setQuery] = useSearchParams();
    const {selectedGenreId} = useAppSelector(state => state.genresReducer);
    console.log(selectedGenreId);

    const prev = async () => {
        await setQuery(prev => ({...prev, with_genres: selectedGenreId, page: +prev.get('page')-1}))
    }

    const next = async () => {
        await setQuery(prev => ({...prev, with_genres: selectedGenreId, page: +prev.get('page')+1}))
    }

    let queryPage = +query.get('page')
    return (
        <div>
            <button disabled={queryPage===1} onClick={prev}>prev</button>
            {queryPage}
            <button disabled={queryPage===500} onClick={next}>next</button>
        </div>
    );
};

export {MoviesByGenresPagination};