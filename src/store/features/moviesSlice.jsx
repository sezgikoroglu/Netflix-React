import { createAsyncThunk,createSlice,PayloadAction } from "@reduxjs/toolkit";

import { getCategories, getMoviesByGenre, getPopularMovies,getSearchMovie,getSingleMovie,getTopRatedMovies,getUpcomingMovies } from "../../services/movies";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        categories:[],
        populars:[],
        topRated:[],
        upcomings:[],
        singleMovie:"",
        moviesByGenre:[],
        search:"",
        searchMovies:[],
        list:[]
    },
    reducers:{
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    
    extraReducers: builder => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
           state.categories = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

        builder.addCase(getTopRatedMovies.fulfilled, (state, action) => {
            state.topRated = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

        builder.addCase(getPopularMovies.fulfilled, (state, action) => {
            state.populars = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

        builder.addCase(getUpcomingMovies.fulfilled, (state, action) => {
            state.upcomings = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

        builder.addCase(getSingleMovie.fulfilled, (state, action) => {
            state.singleMovie = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

        builder.addCase(getMoviesByGenre.fulfilled, (state, action) => {
            state.moviesByGenre = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });

        builder.addCase(getSearchMovie.fulfilled, (state, action) => {
            state.searchMovies = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
    }
})

export const { setSearch } = moviesSlice.actions;
export default moviesSlice.reducer;