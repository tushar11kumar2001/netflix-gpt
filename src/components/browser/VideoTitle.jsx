
const VideoTitle = ({ title, description, img }) => {

  return (
    <div className='absolute w-1/2 text-white mt-96 ml-24 z-10'>
      {img && <img 
      src={"https://image.tmdb.org/t/p/w500" + img} 
      alt="poster" 
      className="w-56 mb-5"/>}
      <p>{title}</p>
      <p className="text-3xl font-normal truncate">{description}</p>
      <div className="mt-5 flex gap-7">
      <button className="px-7 py-2 bg-white text-black text-2xl font-semibold rounded-md"> <i className="fa-solid fa-play mr-2"></i> Play</button>
      <button className="px-7 py-2 bg-gray-400 bg-opacity-50 text-white text-2xl font-semibold rounded-md">More Info</button>
      </div>  
    </div>
  )
}

export default VideoTitle
