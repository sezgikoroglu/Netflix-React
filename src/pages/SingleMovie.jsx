import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleMovie } from '../services/movies';
import { getSingleTv } from '../services/tv';
import { useDispatch,useSelector } from 'react-redux';


const SingleMovieorTv = () => {

    const dispatch=useDispatch()
    const params=useParams();
    console.log(params.type)

    const singleMovieorTv= useSelector((state)=> {
            let detail;
            if(params.type==="movie"){
                detail=state.movies.singleMovie
            }
            else if(params.type==="tv"){
                detail=state.tv.singleTv
            }
            return {detail};
        }

      );

    console.log(singleMovieorTv.detail)

    useEffect(()=>{
        params.type==="movie" ?  dispatch(getSingleMovie(params.id)) : dispatch(getSingleTv(params.id))
        // if (params.type==="movie"){
        //     dispatch(getS(params.id))
            
        //   }
        //   else if(params.type==="tv"){
        //     dispatch(getSingleTv(params.id))
            
        //   }
    },[params.id])

  return (
    <div className='flex space-x-10  lg:h-[65vh] mt-20 p-12 items-center'>
        <div className='w-3/6 h-full relative object-cover rounded-sm  md:rounded'>
        <img   
            src={`https://image.tmdb.org/t/p/w500/${singleMovieorTv.detail?.backdrop_path || singleMovieorTv.detail?.poster_path}`}
            className='w-full h-full'
            alt='img'
            sizes=''
            
         />
        </div>
            
        <div className='w-3/6 flex-col space-y-4'>
            <h2 className="capitalize text-2xl font-bold md:text-3xl lg:text-5xl ">{singleMovieorTv.detail?.title}</h2>
            <div className='flex-col space-y-4'>
                <h5 className='uppercase font-bold'>Overview</h5>
                <p className='text-slate-300'>{singleMovieorTv.detail?.overview}</p>
            </div>
            <div>
                <span className="text-[gray]">Genres:</span>{' '}
                {singleMovieorTv.detail.genres?.map((genre) => genre.name).join(', ')}
            </div>
            <div>
                <span className="text-[gray] capitalize">Production Companies:</span>{' '}
                {singleMovieorTv.detail.production_companies?.map((company) => company.name).join(', ')}
            </div>
            <div>
                <span className="text-[gray] capitalize">Runtime:</span>{' '}
                {singleMovieorTv.detail.runtime}
            </div>
            <div>
                <span className="text-[gray] capitalize">orginal language:</span><span className='capitalize'>
                {singleMovieorTv.detail.original_language}</span>
            </div>

        </div>

    </div>

  )
}

export default SingleMovieorTv