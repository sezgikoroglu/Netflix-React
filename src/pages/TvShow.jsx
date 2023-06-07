import React, { useEffect } from 'react'
import GenreContainer from '../container/GenreContainer'
import { useDispatch,useSelector } from 'react-redux'
import { getTvCategories } from '../services/tv'

const TvShow = () => {

  const dispatch=useDispatch()
  const genres=useSelector((state=>state.tv.categories))
  console.log(genres)

  useEffect(() => {
    dispatch(getTvCategories())
  }, []);

  return (
    <GenreContainer genres={genres} type={"tv"} />
  )
}

export default TvShow