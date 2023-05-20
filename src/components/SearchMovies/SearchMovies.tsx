import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {moviesActions} from "../../redux/slices";

const SearchMovies = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState<string>('');

    return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="find movies by name" aria-label=""
                       aria-describedby="basic-addon1" onChange={e => setKeyword(e.target.value)}/>
                <div className="input-group-prepend">
                    <button disabled={!keyword} className="btn btn-success" type="button" onClick={() => {
                        navigate('/search')
                        dispatch(moviesActions.setSearchKey(keyword))
                    }}>search
                    </button>
                </div>
            </div>
    )
}

export {
    SearchMovies
}