import { Movie } from "../types/Movie";
import { MovieLike } from "./MovieLike";

const MOVIE_API_IMAGES_PATH = 'https://image.tmdb.org/t/p/w342/';
const MAX_TITLE_CHARS: number = 15;

interface MovieItemProps {
    movie: Movie;
    key: number;
}

export const MovieItem = ({ movie, key }: MovieItemProps) => {
    const movieTitle = (movie.title.length > MAX_TITLE_CHARS) ? movie.title.substring(0, MAX_TITLE_CHARS) + '...' : movie.title;
    const moviePoster = movie.poster_path;
    const movieReleaseDate = (movie.release_date) ? movie.release_date.split("-")[0] : '???';

    return (<div key={key} className="h-64 min-w-[170px] max-w-[170px] w-fit rounded-xl grid place-content-center relative motion-safe:animate-fade-in-up transition">
        <MovieLike movie={movie} />
        <h3 className="text-sm font-bold text-center mb-1">{movieTitle}</h3>
        <div className="overflow-hidden min-w-[170px] rounded-xl h-64 shadow-lg shadow-[#274a75]">
            <span title="Vote average" className="absolute top-7 left-2 z-20 px-3 rounded-lg bg-blue-500 bg-opacity-60 backdrop-blur-md cursor-default">{(movie.vote_average).toFixed(1)}</span>
            {moviePoster && <img className="h-64 aspect-auto opacity-100 rounded-xl hover:scale-110 hover:rotate-2 transition " loading="lazy" src={`${MOVIE_API_IMAGES_PATH}${moviePoster}`} title={`${movie.title} Poster`} alt={`${movie.title} Poster`} />}
            {!moviePoster && <em className="w-full h-full px-4 bg-slate-200 backdrop-blur-xl bg-opacity-10 text-center text-xs flex items-center justify-items-center">No poster image available</em>}
        </div>
        {movie.release_date && <span className="h-12 pt-2 text-center flex items-center justify-center absolute -bottom-3 left-0 bg-gradient-to-b from-transparent to-black w-full text-white text-sm rounded-xl">Release Year:&nbsp;<strong>{movieReleaseDate}</strong></span>}
    </div>)
}