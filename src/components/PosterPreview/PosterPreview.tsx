import {useAppSelector} from "../../hooks";
import {urls} from "../../constants";

const PosterPreview = () => {
    const {poster} = useAppSelector(state => state.moviesReducer);

    return (
        <div>
            <img width={350} src={`${urls.posters.posters}${poster}`} alt="Poster"/>
        </div>
    );
};

export {PosterPreview};