const baseURL = 'https://api.themoviedb.org'
const movies = '/3/discover/movie'
const genres = '/3/genre/movie/list'
const posters = 'https://image.tmdb.org/t/p/w500/'

const urls = {
    movies: {
        movies,
    },
    genres: {
        genres
    },
    posters: {
        posters
    }
}

export {baseURL, urls}
