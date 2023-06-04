import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './features/moviesSlice';
import tvSlice from './features/tvSlice';

export const store = configureStore({
    reducer: {
       
       movies:moviesSlice,
       tv:tvSlice
       
    }
})
