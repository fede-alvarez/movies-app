import { Movie } from "../types/Movie";

const MOVIE_API_IMAGES_PATH = 'https://image.tmdb.org/t/p/original/';

export const MovieResults = ({ results }) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-10 mb-32">
                {results.length > 0 && results.map((movie: Movie) => {
                    const movieTitle = (movie.original_title.length > 20) ? movie.original_title.substring(0, 20) + '...' : movie.original_title;
                    const moviePoster = movie.poster_path;
                    const movieReleaseDate = (movie.release_date) ? movie.release_date.split("-")[0] : '???';

                    return (<div key={movie.id} className="h-64 min-w-[170px] max-w-[170px] w-fit rounded-xl shadow-lg grid place-content-center relative">
                        <h3 className="text-sm font-bold">{movieTitle}</h3>
                        <div className="overflow-hidden rounded-xl h-64">
                            {moviePoster && <img className="h-64 aspect-auto opacity-100 rounded-xl hover:scale-110 hover:rotate-2 transition" src={`${MOVIE_API_IMAGES_PATH}${moviePoster}`} title={`${movie.original_title} Poster`} alt={`${movie.original_title} Poster`} />}
                            {!moviePoster && <em className="w-full block pt-8 px-4 h-full bg-slate-200 text-center text-xs">No poster image available</em>}
                        </div>
                        {movie.release_date && <span className="h-12 pt-2 text-center flex items-center justify-center absolute -bottom-3 left-0 bg-gradient-to-b from-transparent to-black w-full text-white text-sm rounded-xl" >Release Year:&nbsp;<strong>{movieReleaseDate}</strong></span>}
                    </div>)
                })}

            </div>
            {results.length == 0 && <div className="flex flex-col w-full text-center"><h3 className="text-xl mb-4">No movie results yet!</h3><p className="italic">Type the name of your movie above to start searching</p></div>}
        </>
    )
}

