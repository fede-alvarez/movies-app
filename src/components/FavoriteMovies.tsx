import { useEffect, useState } from "react";
import { CollectionsBookmark } from "@mui/icons-material"


const getLikedMovies = () => { return JSON.parse(localStorage.getItem("moviesLiked")) };

export const FavoriteMovies = () => {
    const [movies, setMovies] = useState([]);
    const [toggleList, setToggleList] = useState(false);

    useEffect(() => {
        setMovies(getLikedMovies());
    }, []);

    const toggleMoviesList = () => {
        setToggleList(!toggleList);
        setMovies(getLikedMovies());

        if (!toggleList) {
            const delayClose = setTimeout(() => {
                setToggleList(false);
                clearTimeout(delayClose);
            }, 6000);
        }
    };

    return (<div className="size-12 fixed z-30 right-3 bottom-3">
        {toggleList && <div className="bg-white z-50 shadow-lg min-w-[300px] px-4 py-2 rounded-xl absolute bottom-14 right-0 transition animate-fade-in-up">
            <h4 className="font-bold mb-2">Liked movies</h4>
            {movies.length > 0 && <ul>
                {movies.map((movie) => { return <li key={movie.id} className="text-sm py-1 border-b-2 border-gray-200">{movie.title}</li> })}
            </ul>}
            {movies.length == 0 && <p className="text-center text-sm my-4">No movies favorited yet!</p>}
        </div>}
        <button title="Favorited movies" onClick={toggleMoviesList} className="size-12 bg-slate-400 rounded-full hover:bg-slate-300"><CollectionsBookmark className="text-slate-700" /></button>
    </div>)
}