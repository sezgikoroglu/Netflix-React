import React from 'react'
import Banner from '../components/Banner'
import Row from '../components/Row'
import { getCategories, getPopularMovies,getUpcomingMovies, getTopRatedMovies, getSearchMovie } from '../services/movies'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

const HomeContainer = () => {

  const dispatch=useDispatch();
  const searchMovies=useSelector((state)=>state.movies.searchMovies);
  const topRated= useSelector((state) => state.movies.topRated);
  const populars= useSelector((state) => state.movies.populars);
  const upcomings= useSelector((state) => state.movies.upcomings);
  const search=useSelector((state)=>state.movies.search)

  useEffect(() => {
    dispatch(getTopRatedMovies())
    dispatch(getPopularMovies())
    dispatch(getUpcomingMovies())
    
  }, []);

  useEffect(()=>{
    dispatch(getSearchMovie())
  },[search])

  return (
    <>
      {search === "" && (
        <>
          <Banner />
          <section className=" md:space-y-20 pl-[40px]">
            <Row title="Top Rated" movies={topRated} />
            <Row title="Popular" movies={populars} />
            <Row title="Upcoming" movies={upcomings} />
          </section>
        </>
      )}

      {search !=="" && (
        <>
          <div className='pl-[40px] mt-[120px]'>
            <p className='font-light text-slate-500'>
              Explore titles related to: <span className='text-white ml-4 font-normal'>{search}</span>
            </p>
            <Row movies={searchMovies}/>
          </div>
        </>
        )
      }
    </>
  );
}

export default HomeContainer