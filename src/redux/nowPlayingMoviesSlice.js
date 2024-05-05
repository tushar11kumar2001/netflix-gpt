import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNowPlayingMovies } from "../utils/getNowPlayingMovies";


export const nowPlayingMoviesListThunks = createAsyncThunk("nowPlayingMoviesListThunk", async()=>{
    const data = await getNowPlayingMovies();
    return data;
})
const nowPlayingMoviesSlice = createSlice({
    name:"nowPlayingMoviesList",
    initialState:{
        loading : true,
        data : null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(nowPlayingMoviesListThunks.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(nowPlayingMoviesListThunks.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default nowPlayingMoviesSlice.reducer;