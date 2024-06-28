import { useState, useEffect } from 'react';

export const MovieLike = ({ movie }: Movie) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(checkMovieLike());
    }, []);

    const onMovieLikeClicked = () => {
        setLiked(!liked);
        saveStorage();
    }

    const checkMovieLike = () => {
        const likedMovies = JSON.parse(localStorage.getItem("moviesLiked"));
        return likedMovies.findIndex((value) => value.id == movie.id) !== -1;
    }

    const saveStorage = () => {
        let likedMovies = JSON.parse(localStorage.getItem("moviesLiked"));

        if (!liked) {
            const isNewValue = likedMovies.findIndex((value) => value.id == movie.id) === -1;

            if (isNewValue) {
                likedMovies.push({ id: movie.id, poster: movie.poster_path, title: movie.title });
            }

            localStorage.setItem("moviesLiked", JSON.stringify(likedMovies));
            return;
        }

        likedMovies = likedMovies.filter((item) => item.id !== movie.id);
        localStorage.setItem("moviesLiked", JSON.stringify(likedMovies));
    }

    return (<div onClick={onMovieLikeClicked} className="size-8 absolute top-6 right-0 z-10 text-white cursor-pointer hover:scale-125 transition">
        {!liked && <svg className="size-6 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="currentColor" /></svg>}
        {liked && <svg className="size-6 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#FF0000" /></svg>}
    </div>)
}