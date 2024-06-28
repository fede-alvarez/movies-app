import { useState, useEffect } from 'react';
import { checkMovieLike, saveStorage } from '../utils/Storage';

export const MovieLike = ({ movie }: Movie) => {
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const isMovieLiked = checkMovieLike(movie.id);
        setLiked(isMovieLiked);
    }, []);

    const onMovieLikeClicked = () => {
        setLiked(!liked);
        console.log(movie)
        saveStorage(movie, liked);
    }

    return (<div title="Like" onClick={onMovieLikeClicked} className="size-8 absolute top-6 right-0 z-10 text-white cursor-pointer bg-white bg-opacity-10 pl-1 pt-1 backdrop-blur-md rounded-tl-xl rounded-bl-xl hover:scale-125 transition">
        {!liked && <svg className="size-6 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="currentColor" /></svg>}
        {liked && <svg className="size-6 animate-scale-it" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M927.4 273.5v-95.4h-87.9V82.8h-201v95.3h-87.9v95.4h-78.5v-95.4h-88V82.8H183.2v95.3H95.3v95.4H16.7v190.6h78.6v95.4h75.3v95.3H246v95.3h87.9v95.4h100.5v95.3h153.9v-95.3h100.4v-95.4h88v-95.3H852.1v-95.3h75.3v-95.4h78.5V273.5z" fill="#FF0000" /></svg>}
    </div>)
}