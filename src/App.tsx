import { useEffect, useState } from 'react';
import { MovieResults } from './components/MovieResults';
import { Search } from './components/Search';
import { filterMovies } from './utils/utils';
import { fetchMoviesAPI } from './api/moviesAPI';
import { Movie } from './types/Movie';

function App() {
  const [query, setQuery] = useState('');

  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query == '') return;
    setLoading(true);
    fetchMoviesAPI(query).then(response => response.json()).then((data) => {
      const filteredMovies = filterMovies(data.results, query);
      setResults(filteredMovies);
    }).catch(error => {
      setError(error.message);
      console.error(error);
    }).finally(() => setLoading(false));
  }, [query]);


  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return (
    <div className="container mx-auto px-8 pt-4">
      <div className='text-center'>
        <h1 className="bg-gradient-to-t from-black via-slate-400 to-slate-800 inline-block text-transparent bg-clip-text text-4xl font-bold">Movie Finder</h1>
      </div>
      <Search query={query} onChange={handleSearchFilter} />
      {error && <div className="text-center rounded-md py-4 mb-2 font-semibold text-red-950 bg-red-400">{error}</div>}
      {loading && <span className='block w-full text-center py-2 text-2xl animate-pulse transition'>Loading...</span>}
      <section>
        {results.length > 0 && <h2 className="text-2xl border-b-2 border-b-gray-200 mb-8">Movies including: <em className='text-slate-500'>{query}</em></h2>}
        <MovieResults results={results} />
      </section>
    </div>
  )
}

export default App
