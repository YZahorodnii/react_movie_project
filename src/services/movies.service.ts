import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const moviesService = {
    getMovies: (page: number): IRes<IMovie> => axiosService.get(urls.movies.movies, {params: {page}})
}

export {moviesService}