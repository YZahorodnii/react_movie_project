import {axiosService} from "./axios.service";
import {urls} from "../constants";

const genresService = {
    getGenres: () => axiosService.get(urls.genres.genres)
}

export {genresService}