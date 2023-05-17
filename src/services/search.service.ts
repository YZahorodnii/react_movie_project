import {axiosService} from "./axios.service";
import {IRes} from "../types";
import {IMovie} from "../interfaces";
import {urls} from "../constants";

const searchService = {
    getSearchMovies: (query: string): IRes<IMovie> => axiosService.get(urls.search.search, {params: {query: query}})
}

export {searchService}