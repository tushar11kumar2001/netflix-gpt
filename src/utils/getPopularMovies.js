import { API_option } from "./constant"

export const getPopularMovies = async ()=>{
    try{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_option);
        const response = await data.json();
        return response.results;
    }catch(e){
      console.log("error to fetch popular movies ",e );
    }
}
