export const Search = ({ query, onChange }) => {
    return (
        <input type="search" value={query} onChange={onChange} required placeholder='Enter a movie title' />
    )
}
