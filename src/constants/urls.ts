const baseURL = 'https://api.themoviedb.org'
const movies = '/3/discover/movie'
const genres = '/3/genre/movie/list'
const posters = 'https://image.tmdb.org/t/p/w500'
const search = '/3/search/movie?include_adult=false&language=en-US'
const rated = '/3/movie/top_rated?language=en-US&page=1'
const video = '/3/movie'

const urls = {
    movies: {
        movies,
    },
    genres: {
        genres
    },
    posters: {
        posters
    },
    rated: {
        rated
    },
    search: {
        search
    },
    video: {
        video
    }
}

export {baseURL, urls}
