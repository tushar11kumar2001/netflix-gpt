import { API_option } from "./constant"

export const getTopRatedMovies = async ()=>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_option);
        const response = await data.json();
        return response.results;
    }catch(e){
      console.log("error to fetch top rated movies ",e );
    }
}