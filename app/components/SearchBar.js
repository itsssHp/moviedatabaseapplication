import { useState } from 'react';
import { fetchMovies } from '../services/movieService';

export default function SearchBar({ setMovies }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (query.trim() === '') {
      setMovies([]); 
      return;
    }
    const data = await fetchMovies(query);
    setMovies(data);
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
        placeholder="Search for movies..."
        className="p-2 border rounded-lg w-1/2"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}
