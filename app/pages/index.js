import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(''); // Fetch initial movies (e.g., popular movies)
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <div>
      <SearchBar setMovies={setMovies} />  {/* Pass the state updater function to the SearchBar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
