export interface IMovie {
    id: number,
    title: string,
    genre_ids: number[],
    overview: string,
    poster_path: string,
    vote_average: number,
    results: []
}