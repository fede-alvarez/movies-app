import { useEffect, useState } from "react";
import { CloseRounded, CollectionsBookmark, DeleteForever } from "@mui/icons-material"
import { getLikedMovies, resetStorage } from "../utils/Storage";

const DELAYED_CLOSE_TIME = 8000;

let delayCloseTimer = null;

export const FavoriteMovies = () => {
    const [movies, setMovies] = useState([]);
    const [toggleList, setToggleList] = useState(false);

    useEffect(() => {
        //console.log(getLikedMovies())
        setMovies(getLikedMovies());
    }, []);

    const toggleMoviesList = () => {
        setToggleList(!toggleList);
        setMovies(getLikedMovies());

        if (!toggleList) {
            delayCloseTimer = setTimeout(() => {
                closeMoviesList();
            }, DELAYED_CLOSE_TIME);
        }
    };

    const closeMoviesList = () => {
        setToggleList(false);
        clearTimeout(delayCloseTimer);
    }

    const deleteMoviesList = () => {
        closeMoviesList();
        if (window.confirm("Liked movies will be removed! Are you sure?")) {
            setMovies([]);
            resetStorage();
        }
    }

    return (<div className="size-12 fixed z-30 right-3 bottom-3">
        {toggleList && <div className="bg-white shadow-lg min-w-[400px] px-4 py-2 rounded-xl absolute z-50 bottom-14 right-0 transition animate-fade-in-up">
            <button className="absolute top-1 right-1 px-3 py-1 " onClick={closeMoviesList}><CloseRounded titleAccess="Close" /></button>
            <h4 className="font-bold mb-2">Liked movies</h4>
            <div className="min-h-12 max-h-64 overflow-y-auto">
                {movies.length > 0 && <ul>
                    {movies.map((movie) => { return <li key={movie.id} className="text-sm py-1 border-b-2 border-gray-200">{movie.title}</li> })}
                </ul>}
            </div>
            {movies.length == 0 && <p className="text-center text-sm my-4">No movies favorited yet!</p>}
            <div className="flex items-center justify-center">
                <button className="px-2 py-1 my-1 bg-red-600 text-white text-sm rounded-xl" onClick={deleteMoviesList}><DeleteForever /> Delete movies</button>
            </div>
        </div>}
        <button title="Favorited movies" onClick={toggleMoviesList} className="size-12 bg-slate-400 rounded-full hover:bg-slate-300"><CollectionsBookmark className="text-slate-700" /></button>
    </div>)
}