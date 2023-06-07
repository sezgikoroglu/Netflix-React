import { createAsyncThunk,createSlice,PayloadAction } from "@reduxjs/toolkit";
import { getTvCategories,getTvByGenre, getSingleTv,getPopularTv,getTopRatedTv,getUpcomingTv } from "../../services/tv";

const tvSlice=createSlice({
    name:"tv",
    initialState:{
        categories:[],
        tvByGenre:[],
        singleTv:"",
        populars:[],
        upcomings:[],
        topRated:[]
    },
    reducers:{
        setSearch(state, action) {
            state.search = action.payload;
        },
    },
    
    extraReducers: builder => {
        builder.addCase(getTvCategories.fulfilled, (state, action) => {
           state.categories = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getTvByGenre.fulfilled, (state, action) => {
            state.tvByGenre = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
         });
        builder.addCase(getSingleTv.fulfilled, (state, action) => {
            state.singleTv = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getPopularTv.fulfilled, (state, action) => {
            state.populars = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getTopRatedTv.fulfilled, (state, action) => {
            state.topRated = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
        builder.addCase(getUpcomingTv.fulfilled, (state, action) => {
            state.upcomings = action?.payload ? (Array.isArray([action.payload]) ? action.payload : []) : [];
        });
    }
})

//export const { setSearch } = tvSlice.actions;
export default tvSlice.reducer;