import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from './movies';

const API_KEY = "8dfe319a71b29aa3264820c36da4b774"

export const getTvCategories= createAsyncThunk('tv/categories', async () => {
  const res = await fetch(`${BASE_URL}/genre/tv/list?api_key=${API_KEY}`);
  const response=await res.json()
  return response.genres;
});

export const getTvByGenre = createAsyncThunk('tv-tvByGenre', async (id) => {
  const res = await fetch(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${id}`);
  const response=await res.json()
  return response.results;
});


export const getSingleTv = createAsyncThunk('tvdetail', async (id) => {
  const res = await fetch(`${BASE_URL}/tv/${id}?api_key=${API_KEY}`);
  const response=await res.json()
  return response;
});

export const getPopularTv = createAsyncThunk('tv/popular', async () => {
  const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});

export const getTopRatedTv = createAsyncThunk('tv/toprated', async () => {
  const res = await fetch(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});

export const getUpcomingTv = createAsyncThunk('tv/upcoming', async () => {
  const res = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});