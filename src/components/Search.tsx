interface SearchProps {
    query: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({ query, onChange }: SearchProps) => {
    return (
        <input className="px-4 py-4 my-4 text-xl w-full rounded-full shadow-xl" type="search" value={query} onChange={onChange} required placeholder='Enter a movie title' />
    )
}
