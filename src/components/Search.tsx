import { SearchRounded } from "@mui/icons-material";
import { useMovieContext } from "../contexts/MovieContext";

export const Search = () => {
    const { query, setQuery } = useMovieContext();

    const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    return (
        <div className="relative my-4">
            <SearchRounded className="absolute left-4 top-1/2 -translate-y-3" />
            <input className="px-12 py-4 text-xl w-full bg-[#274a75] rounded-full outline-none" type="search" value={query} onChange={handleSearchFilter} required placeholder='Enter a movie title' />
        </div>
    )
}
