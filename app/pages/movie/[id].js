// app/pages/movie/[id].js
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../../services/movieService'
import Image from 'next/image'

export default function MovieDetail() {
  const router = useRouter()
  const { id } = router.query
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    if (id) {
      const getMovieDetails = async () => {
        const data = await fetchMovieDetails(id)
        setMovie(data)
      }

      getMovieDetails()
    }
  }, [id])

  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-96 object-cover rounded-md"
      />
      <h1 className="mt-4 text-2xl font-bold">{movie.title}</h1>
      <p>{movie.overview}</p>
      <p className="mt-2 text-sm">Release Date: {movie.release_date}</p>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const movie = await fetchMovieDetails(params.id)
  return { props: { movie } }
}
