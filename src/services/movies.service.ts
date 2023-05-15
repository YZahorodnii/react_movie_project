import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class MoviesService {
    getAll(page = 1): IRes<IMovie> {
        return axiosService.get(urls.movies.movies, {params: {page: page}})
        //getAll: (page=1) => axiosService.get(urls.characters.characters, {params: {page: page}}),

    }
}

export const moviesService = new MoviesService()