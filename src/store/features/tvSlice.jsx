import { createAsyncThunk,createSlice,PayloadAction } from "@reduxjs/toolkit";
import { getTvCategories,getTvByGenre } from "../../services/tv";

const tvSlice=createSlice({
    name:"tv",
    initialState:{
        categories:[],
        tvByGenre:[]
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
    }
})

//export const { setSearch } = tvSlice.actions;
export default tvSlice.reducer;