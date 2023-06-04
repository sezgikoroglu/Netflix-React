import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMoviesByGenre } from '../services/movies'
import { getCategories } from '../services/movies'

const MoviesByGenre = () => {

    const dispatch=useDispatch()
    const params=useParams()

    const moviesByGenre= useSelector(
        (state) => state.movies.moviesByGenre
    );

    const categories= useSelector(
        (state) => state.movies.categories
    );
    console.log(moviesByGenre)

    useEffect(()=>{
        dispatch(getMoviesByGenre(params.id))
        dispatch(getCategories())
    },[params.id])

  return (
    <div className=' space-x-10  lg:h-[65vh] mt-20 p-12 items-center'>
        <h2 className="capitalize w-56 md:text-2xl cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
            {
              categories.find(ctg=>ctg.id == params.id )?.name
            }
        </h2>
        
        <div className='grid grid-cols-3 gap-6 mt-7'>
            {
            moviesByGenre.map(movie=>(
              <div key={"movies"+movie.id} className='w-full h-full flex flex-col gap-2 items-center'>
                <Link to={"/movie/"+movie.id} className='relative w-full h-full flex flex-col gap-2 items-center' >
                    <img  className='relative object-cover rounded-sm  md:rounded md:hover:scale-110 transition duration-200 ease-out'
                        src={`https://image.tmdb.org/t/p/w500${movie?.poster_path || movie?.backdrop_path}`}
                        height={600}
                        width={300}
                        alt="img"
                    />
                    <p>{movie.title}</p>
                </Link>
              </div>
            ))
            }
        </div>
        
    </div>
    
  )
}

export default MoviesByGenre