import { useEffect, useState } from 'react';
import { MovieResults } from './components/MovieResults';
import { Search } from './components/Search';

import './App.css'

const MOVIES_API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzcyNDNiMGJiMDc5OGM2ZTBkZmJlMzE5ODYxOTg2NiIsIm5iZiI6MTcxOTI2MzQxMC40OTk2ODcsInN1YiI6IjY2NzlkNzM4ZTFiZDQ4YzA2OTU2NWY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qxpiWN74btwmVFTMGfEknZ16AhFDGMHAzZgUOYvVUwI'

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query == '') return;
    const moviesApiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    setLoading(true);
    fetch(moviesApiUrl, {
      headers: { "Authorization": `Bearer ${MOVIES_API_TOKEN}` }
    }).then(response => response.json()).then((data) => {
      const filteredMovies = filterMovies(data.results, query);
      setResults(filteredMovies);
    }).catch(error => {
      console.error("Current Error", error);
    }).finally(() => { setLoading(false); });
  }, [query]);

  const handleSearchFilter = (e) => {
    setQuery(e.target.value);
  }

  const filterMovies = (items, query) => {
    return items.filter(item => item.original_title.toLowerCase().includes(query))
  }

  return (
    <>
      <h1>Movie apps</h1>
      <Search query={query} onChange={handleSearchFilter} />
      <hr />
      <MovieResults results={results} />
    </>
  )
}

export default App
