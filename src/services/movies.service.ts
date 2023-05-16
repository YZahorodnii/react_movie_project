import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const moviesService = {
    getMovies: (page: number): IRes<IMovie> => axiosService.get(urls.movies.movies, {params: {page: page}}),
    getMoviesByGenre:(with_genres: number, page: number) => axiosService.get(urls.movies.movies, {params: {with_genres: with_genres, page: page}})
}

export {moviesService}