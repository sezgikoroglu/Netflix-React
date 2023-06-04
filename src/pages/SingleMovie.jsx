import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../services/movies';
import { useDispatch,useSelector } from 'react-redux';


const SingleMovie = () => {

    const dispatch=useDispatch()
    const params=useParams();

    const singleMovie= useSelector(
        (state) => state.movies.singleMovie
      );

    console.log("singlemovie"+singleMovie)

    useEffect(()=>{
        dispatch(getSingleMovie(params.id))
    },[params.id])

  return (
    <div className='flex space-x-10  lg:h-[65vh] mt-20 p-12 items-center'>
        <div className='w-3/6 h-full relative object-cover rounded-sm  md:rounded'>
        <img   
            src={`https://image.tmdb.org/t/p/w500/${singleMovie?.backdrop_path || singleMovie?.poster_path}`}
            className='w-full h-full'
            alt='img'
            sizes=''
            
         />
        </div>
            
        <div className='w-3/6 flex-col space-y-4'>
            <h2 className="capitalize text-2xl font-bold md:text-3xl lg:text-5xl ">{singleMovie?.title}</h2>
            <div className='flex-col space-y-4'>
                <h5 className='uppercase font-bold'>Overview</h5>
                <p className='text-slate-300'>{singleMovie?.overview}</p>
            </div>
            <div>
                <span className="text-[gray]">Genres:</span>{' '}
                {singleMovie.genres?.map((genre) => genre.name).join(', ')}
            </div>
            <div>
                <span className="text-[gray] capitalize">Production Companies:</span>{' '}
                {singleMovie.production_companies?.map((company) => company.name).join(', ')}
            </div>
            <div>
                <span className="text-[gray] capitalize">Runtime:</span>{' '}
                {singleMovie.runtime}
            </div>
            <div>
                <span className="text-[gray] capitalize">orginal language:</span><span className='capitalize'>
                {singleMovie.original_language}</span>
            </div>

        </div>

    </div>

  )
}

export default SingleMovie