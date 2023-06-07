import React, { useEffect } from 'react'
import GenreContainer from '../container/GenreContainer'
import { useDispatch,useSelector } from 'react-redux'
import { getCategories } from '../services/movies'
import HomeContainer from "../container/HomeContainer"

const Movies = () => {

  const dispatch=useDispatch()
  const genres=useSelector((state=>state.movies.categories))

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  return (
    <>
      {/* <GenreContainer genres={genres} type={"movie"}/> */}
      <HomeContainer genres={genres} type={"movie"}/>
    </>
   
  )
}

export default Movies