import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import SingleMovie from '../pages/SingleMovie';
import Movies from '../pages/Movies';
import ListByGenre from '../pages/ListByGenre';
import TvShow from '../pages/TvShow';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} /> 
                <Route path='/movies' element={<Movies/>}></Route>
                <Route path='/genre/:id/type/:type' element={<ListByGenre/>}/>
                <Route path="/movie/:id" element={<SingleMovie />} />
                <Route path='/tvShows' element={<TvShow/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router