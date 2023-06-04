import { createAsyncThunk,createSlice,PayloadAction } from "@reduxjs/toolkit";
import { getCategories } from "../../services/tv";

const tvSlice=createSlice({
    name:"tv",
    initialState:{
        categories:[],
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
    }
})

//export const { setSearch } = tvSlice.actions;
export default tvSlice.reducer;