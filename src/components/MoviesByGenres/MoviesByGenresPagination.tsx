import React, {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";
import css from '../MovieList/Pagination.module.css'

const MoviesByGenresPagination: FC = () => {
    const [query, setQuery] = useSearchParams();
    const {selectedGenreId} = useAppSelector(state => state.genresReducer);
    const {totalPages} = useAppSelector(state => state.moviesReducer);

    const prev = async () => {
        await setQuery(prev => ({...prev, with_genres: selectedGenreId, page: +prev.get('page')-1}))
    }

    const next = async () => {
        await setQuery(prev => ({...prev, with_genres: selectedGenreId, page: +prev.get('page')+1}))
    }

    let queryPage = +query.get('page')
    const nextDisable = totalPages<500?totalPages:500

    return (
        <div className={css.Pagination}>
            <button className="btn btn-light" disabled={queryPage===1} onClick={prev}>prev</button>
            <button className="btn btn-light" disabled={queryPage===nextDisable} onClick={next}>next</button>
        </div>
    );
};

export {MoviesByGenresPagination};