import { MovieResults } from './components/MovieResults';
import { Search } from './components/Search';

import { MovieContextProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieContextProvider>
      <main className="container mx-auto px-8 pt-4">
        <div className='text-center'>
          <h1 className="bg-gradient-to-t from-black via-slate-400 to-slate-800 inline-block text-transparent bg-clip-text text-4xl font-bold">Movie Finder</h1>
        </div>
        <Search />
        <MovieResults />
      </main>
    </MovieContextProvider>
  )
}

export default App
