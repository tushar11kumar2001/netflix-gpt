import { useSelector } from "react-redux"
import MovieList from "./MovieList"
const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.nowPlayingMoviesList)
  const popularMovies = useSelector(store => store.popularMoviesList)
  const topRatedMovies = useSelector(store => store.topRatedMoviesList)
  return (
    <div className="bg-black bg-opacity-95 text-white">
      <div className="relative -mt-32">
        <MovieList title="Now Playing" movies={nowPlayingMovies.data} />
        <MovieList title="Top rated" movies={topRatedMovies.data} />
        <MovieList title="Popular" movies={popularMovies.data} />
        <MovieList title="Upcoming" movies={nowPlayingMovies.data} />
      </div>

    </div>
  )
}

export default SecondaryContainer
