import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import SingleMovie from '../pages/SingleMovie';
import Movies from '../pages/Movies';
import MoviesByGenre from '../pages/MoviesByGenre';
import TvShow from '../pages/TvShow';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} /> 
                <Route path='/movies' element={<Movies/>}></Route>
                <Route path='/movies/:id' element={<MoviesByGenre/>}></Route>
                <Route path="/movie/:id" element={<SingleMovie />} />
                <Route path='/tvShows' element={<TvShow/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router