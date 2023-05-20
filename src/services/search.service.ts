import {axiosService} from "./axios.service";
import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {urls} from "../constants";

const searchService = {
    getMovies: (page: number, query: string): IRes<IMovie> => axiosService.get(urls.search.search, {params: {page: page, query: query}})
}

export {searchService}