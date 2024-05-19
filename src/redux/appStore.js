import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import nowPlayingMoviesReducer from "./nowPlayingMoviesSlice"
import popularMoviesReducer from "./popularMoviesSlice"
import topRatedMoviesReducer from "./topRatedMoviesSlice"
 const appStore = configureStore({
    reducer:{
      user:userReducer,
      nowPlayingMoviesList: nowPlayingMoviesReducer,
      popularMoviesList: popularMoviesReducer,
      topRatedMoviesList: topRatedMoviesReducer
    }
 })

 export default appStore;