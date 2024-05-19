import React from 'react'
import { IMG_CDN_URL } from '../../utils/constant'

const MovieCard = ({poster}) => {
  return (
    <div className='w-56 '>
      <img src={IMG_CDN_URL+poster} alt="poster" className='rounded-md w-56  h-[200px]'/>
    </div>
  )
}

export default MovieCard
