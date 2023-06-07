import React, { useEffect } from 'react'
import GenreContainer from '../container/GenreContainer'
import { useDispatch,useSelector } from 'react-redux'
import { getTvCategories } from '../services/tv'
import HomeContainer from '../container/HomeContainer'

const TvShow = () => {

  const dispatch=useDispatch()
  const genres=useSelector((state=>state.tv.categories))
  console.log(genres)

  useEffect(() => {
    dispatch(getTvCategories())
  }, []);

  return (
    //<GenreContainer genres={genres} type={"tv"} />
    <HomeContainer  genres={genres} type={"tv"} />
  )
}

export default TvShow