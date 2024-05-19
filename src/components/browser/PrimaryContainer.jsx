import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { logo } from '../../utils/getNowPlayingMovies';

const PrimaryContainer = () => {
  const [idx, setIdx] = useState(null);
  const [image, setImage] = useState(null);
  const [mainMovie, setMainMovie] = useState(null);

  const movies = useSelector(store => store.nowPlayingMoviesList?.data);
  if (!movies) return;
  useEffect(() => {
    if (!idx) setIdx(Math.floor(Math.random() * movies.length));
    setMainMovie(movies[idx]);
    if (mainMovie) logo(mainMovie.id).then((data) => { setImage(data) })
  }, [movies])
  // console.log(image);


  return (
    <div className='relative overflow-x-hidden'>
      {mainMovie && <VideoTitle title={mainMovie?.original_title} description={mainMovie?.overview} img={image} />}
     {mainMovie && <VideoBackground id={mainMovie?.id}/>}
    </div>
  )
}

export default PrimaryContainer
