import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './movies';

const API_KEY = "8dfe319a71b29aa3264820c36da4b774"

export const getCategories = createAsyncThunk('movies/categories', async () => {
  const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`);
  const response=await res.json()
  return response.genres;
});