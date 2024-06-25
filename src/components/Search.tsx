import { useMovieContext } from "../contexts/MovieContext";

export const Search = () => {
    const { query, setQuery } = useMovieContext();

    const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    return (
        <input className="px-4 py-4 my-4 text-xl w-full rounded-full shadow-lg shadow-slate-100 outline-none" type="search" value={query} onChange={handleSearchFilter} required placeholder='Enter a movie title' />
    )
}
