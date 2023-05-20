import {IRes} from "../types";
import {IMovie, IVideo} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const moviesService = {
    getMovies: (page: number): IRes<IMovie> => axiosService.get(urls.movies.movies, {params: {page: page}}),
    getMoviesByGenre:(with_genres: number, page: number): IRes<IMovie> => axiosService.get(urls.movies.movies, {params: {with_genres: with_genres, page: page}}),
    getPoster: (posterPath: string): IRes<string> => axiosService.get(urls.posters.posters+posterPath),
    getMoviesRated: (): IRes<IMovie> => axiosService.get(urls.rated.rated),
    getVideos: (movieId: string): IRes<IVideo> => axiosService.get(urls.video.video+`/${movieId}/videos`)
}

export {moviesService}