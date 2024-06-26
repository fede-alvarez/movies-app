import { useContext, useState, useEffect, createContext } from "react";
import { Movie } from "../types/Movie";
import { fetchMoviesAPI } from "../api/moviesAPI";
import { filterMovies } from "../utils/utils";

const API_RESPONSE_DELAY: number = 1200;

type MovieContextProviderProps = {
    children: React.ReactNode;
}

type MovieContext = {
    movies: Movie[];
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    error: string | null;
}

export const MovieContext = createContext<MovieContext | null>(null);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query == '' || query == undefined) {
            setMovies([]);
            return;
        }

        const delayApiCall = setTimeout(() => {
            setLoading(true);
            fetchMoviesAPI(query).then(response => {
                if (response.status >= 400) {
                    throw new Error("Server responds with error!");
                }
                return response.json()
            }).then((data) => {
                const filteredMovies = filterMovies(data.results, query);
                setMovies(filteredMovies);
            }).catch(error => {
                console.error(error);
                setError(error.message);
                setMovies([]);
            }).finally(() => setLoading(false));
        }, API_RESPONSE_DELAY);

        return () => clearTimeout(delayApiCall);

    }, [query]);

    return (
        <MovieContext.Provider
            value={{
                movies,
                query,
                setQuery,
                loading,
                error
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMovieContext() {
    const context = useContext(MovieContext);
    if (context === undefined) {
        throw new Error("MovieContext must be used within a Provider");
    }
    return context;
}

