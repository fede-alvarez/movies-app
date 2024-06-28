import { useEffect } from 'react';

import { FavoriteMovies } from './components/FavoriteMovies';
import { MovieResults } from './components/MovieResults';
import { Search } from './components/Search';
import { checkForStorage } from './utils/Storage';

import { Logo } from "./assets/Logo";

import { MovieContextProvider } from "./contexts/MovieContext";

function App() {
  useEffect(() => {
    checkForStorage();
  }, []);

  return (
    <MovieContextProvider>
      <main className="w-full h-screen px-8 pt-4 relative">
        <div className="absolute z-0 top-0 left-0 w-full bg-[url('assets/movies-tiles.webp')] bg-cover opacity-10 mix-blend-overlay min-h-28 lg:min-h-44">&nbsp;</div>
        <div className='container z-10 mx-auto px-8 max-w-8xl text-[#F3F3F3]'>
          <div className='text-center my-4 lg:my-8'>
            <h1 className="inline-block"><Logo /></h1>
          </div>
          <Search />
          <section id="movie-results">
            <MovieResults />
          </section>
        </div>
        <FavoriteMovies />
      </main>
    </MovieContextProvider>
  )
}

export default App
