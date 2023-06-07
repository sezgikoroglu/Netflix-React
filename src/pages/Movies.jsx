import React, { useEffect } from 'react'
import GenreContainer from '../container/GenreContainer'
import { useDispatch,useSelector } from 'react-redux'
import { getCategories } from '../services/movies'

const Movies = () => {

  const dispatch=useDispatch()
  const genres=useSelector((state=>state.movies.categories))
  console.log(genres)

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  return (
    <GenreContainer genres={genres} type={"movie"}/>
  )
}

export default Movies