import { API_option } from "./constant"

export const getNowPlayingMovies = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_option);
    const response  = await data.json();
    // console.log(response);
    return response.results;

}