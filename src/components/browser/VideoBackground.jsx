import { useEffect, useState } from "react";
import { trailer } from "../../utils/getNowPlayingMovies";



const VideoBackground = ({ id }) => {
  const [videoKey, setVideoKey] = useState(null);

  useEffect(() => {
    trailer(id).then((data) => setVideoKey(data))
  }, [])


  return (
    <div className="overflow-hidden w-screen h-screen ">
      {videoKey && <iframe 
      className="w-full h-[120%] relative top-[-50px]"  
      src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`} 
      title="YouTube video player"

      ></iframe>}
    </div>
  )
}

export default VideoBackground
