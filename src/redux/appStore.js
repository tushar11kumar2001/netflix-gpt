import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice"
 
 const appStore = configureStore({
    reducer:{
      user:userReducer,
      nowPlayingMoviesList: nowPlayingMoviesReducer
    }
 })

 export default appStore;