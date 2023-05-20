import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import css from './Pagination.module.css'

const MovieListPagination: FC = () => {
    let [query, setQuery] = useSearchParams();
    const {totalPages} = useAppSelector(state => state.moviesReducer);
    const next = async () => {
        await setQuery(prev => ({...prev, page: +prev.get('page') + 1}))
    }

    const queryPage = +query.get('page')


    const prev = async () => {
        await setQuery(prev => ({...prev, page: +prev.get('page') - 1}))
    }

    const nextDisable = totalPages < 500 ? totalPages : 500

    return (
        <div className={css.Pagination}>
            <button className="btn btn-light" disabled={queryPage === 1} onClick={prev}>prev</button>
            <button className="btn btn-light" disabled={queryPage === nextDisable} onClick={next}>next</button>
        </div>
    );
};

export {MovieListPagination};