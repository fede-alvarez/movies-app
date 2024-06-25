import { Movie } from "../types/Movie"

export const filterMovies = (results: Movie[], query: string) => {
    return results.filter(movie => movie.original_title.toLowerCase().includes(query));
}