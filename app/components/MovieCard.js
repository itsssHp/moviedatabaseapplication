import Image from 'next/image';

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}  // Set the width (you can adjust as needed)
        height={750} // Set the height (you can adjust as needed)
        className="w-full h-64 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
      <p className="text-gray-600">{movie.release_date}</p>
    </div>
  );
}
