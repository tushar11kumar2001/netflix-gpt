import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularMovies } from "../utils/getPopularMovies";


export const popularMoviesListThunks = createAsyncThunk("popularMoviesListThunk", async()=>{
    const data = await getPopularMovies();
    return data;
})
const popularMoviesSlice = createSlice({
    name:"popularMoviesList",
    initialState:{
        loading : true,
        data : null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(popularMoviesListThunks.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(popularMoviesListThunks.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default popularMoviesSlice.reducer;