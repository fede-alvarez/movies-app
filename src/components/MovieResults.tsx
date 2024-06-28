import { MovieSharp } from "@mui/icons-material";
import { useMovieContext } from "../contexts/MovieContext";
import { Movie } from "../types/Movie";
import { MovieItem } from "./MovieItem";
import { Skeleton } from "@mui/material";

export const MovieResults = () => {
    const { movies, query, loading, error } = useMovieContext();

    return (
        <>
            {query.length > 0 && <h2 className="text-2xl mb-8 lg:mb-12 text-center">Movies including: <em className='text-slate-500'>{query}</em></h2>}
            {error && <div className="text-center rounded-md py-4 mb-2 font-semibold text-red-950 bg-red-400">{error}</div>}

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-12 place-items-center mb-32">
                {!loading && movies.length > 0 && movies.map((movie: Movie) => <MovieItem key={movie.id} movie={movie} />)}
                {loading && [...Array(10)].map(() => {
                    return (<div className="flex flex-col gap-1">
                        <Skeleton variant="text" sx={{ bgcolor: '#274a75' }} animation="wave" width={170} />
                        <Skeleton variant="rounded" sx={{ bgcolor: '#274a75' }} animation="wave" width={170} height={250} />
                    </div>);
                })}
            </div>
            {movies.length == 0 && <div className="flex flex-col w-full text-center my-8 lg:my-24"><div className="text-center"><MovieSharp /></div><h3 className="text-2xl font-bold mb-4">No movie results yet!</h3><p className="italic">Type the name of your movie above to start searching</p></div>}
        </>
    )
}