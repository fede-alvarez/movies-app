import { Movie } from "../types/Movie";

interface MovieStorage {
    id: number;
    poster: string;
    title: string;
}

const MOVIES_LIKES_KEY = "moviesLiked";

export const checkForStorage = () => {
    const storage = localStorage.getItem(MOVIES_LIKES_KEY);

    if (storage == null || storage == undefined) {
        localStorage.setItem(MOVIES_LIKES_KEY, JSON.stringify([]));
    }
};

export const checkMovieLike = (movieId: number) => {
    const likedMovies = getItems();
    return likedMovies.findIndex((value: MovieStorage) => value.id == movieId) !== -1;
};

export const saveStorage = (movie: Movie, liked: boolean) => {
    let likedMovies = getItems();
    console.log(movie)
    if (!liked) {
        const isNewValue = likedMovies.findIndex((value: MovieStorage) => value.id == movie.id) === -1;

        if (isNewValue) {
            likedMovies.push({ id: movie.id, poster: movie.poster_path, title: movie.title });
        }

        saveItems(likedMovies);
        return;
    }

    likedMovies = likedMovies.filter((item: MovieStorage) => item.id !== movie.id);
    saveItems(likedMovies);
};

export const resetStorage = () => {
    localStorage.setItem(MOVIES_LIKES_KEY, JSON.stringify([]));
};

export const getLikedMovies = () => { return getItems(); }

const saveItems = (items: MovieStorage[]) => {
    localStorage.setItem(MOVIES_LIKES_KEY, JSON.stringify(items));
};

const getItems = () => {
    return JSON.parse(localStorage.getItem(MOVIES_LIKES_KEY) || '""');
};