
const moviesApiBase = 'https://api.themoviedb.org/3/search/movie';

export const fetchMoviesAPI = (query: string) => {
    const moviesApiUrl = `${moviesApiBase}?query=${query}&include_adult=false&language=en-US&page=1`

    return fetch(moviesApiUrl, {
        headers: { "Authorization": `Bearer ${import.meta.env.VITE_MOVIEAPI_TOKEN}` }
    });
}