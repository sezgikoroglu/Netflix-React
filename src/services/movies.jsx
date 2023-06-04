import { createAsyncThunk } from '@reduxjs/toolkit';
import { Apis } from './apis';

export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "8dfe319a71b29aa3264820c36da4b774"

export const getCategories = createAsyncThunk('movies/categories', async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const response=await res.json()
  return response.genres;
});

export const getPopularMovies = createAsyncThunk('movies/popular', async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});

export const getTopRatedMovies = createAsyncThunk('movies/toprated', async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});

export const getUpcomingMovies = createAsyncThunk('movies/upcoming', async () => {
  const res = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});

export const getSingleMovie = createAsyncThunk('moviedetail', async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const response=await res.json()
  return response;
});

export const getMoviesByGenre = createAsyncThunk('genreId', async (id) => {
  const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}`);
  const response=await res.json()
  return response.results;
});

export const getSearchMovie = createAsyncThunk('query', async (input) => {
  const res = await fetch(`${BASE_URL}/search/movie?query=${input}&api_key=${API_KEY}`);
  const response=await res.json()
  return response.results;
});

