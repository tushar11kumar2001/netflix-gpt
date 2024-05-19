import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTopRatedMovies } from "../utils/getTopRatedMovies";


export const topRatedMoviesListThunk = createAsyncThunk("topRatedMoviesListThunk", async()=>{
    const data = await getTopRatedMovies();
    return data;
})
const topRatedMoviesSlice = createSlice({
    name:"topRatedMoviesList",
    initialState:{
        loading : true,
        data : null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(topRatedMoviesListThunk.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(topRatedMoviesListThunk.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
    }
})

export default topRatedMoviesSlice.reducer;