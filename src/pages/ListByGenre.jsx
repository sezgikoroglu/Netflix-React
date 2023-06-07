import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMoviesByGenre,getCategories } from '../services/movies'
import { getTvCategories, getTvByGenre} from '../services/tv'

const ListByGenre = () => {

    const dispatch=useDispatch()
    const params=useParams()

    console.log(params.type)

  
    const listByGenre = useSelector((state) => {
      let list;
      let categories;
      if (params.type === "movie") {
         list= state.movies.moviesByGenre;
         categories= state.movies.categories;
      }
      else if(params.type === "tv") {
         list= state.tv.tvByGenre;
         categories= state.tv.categories;
      }

      return {list,categories}
    });

    useEffect(()=>{
      if (params.type==="movie"){
        dispatch(getMoviesByGenre(params.id))
        dispatch(getCategories())
      }
      else if(params.type==="tv"){
        dispatch(getTvByGenre(params.id))
        dispatch(getTvCategories())
      }
        
    },[params.id])

  return (
    <div className=' space-x-10  lg:h-[65vh] mt-20 p-12 items-center'>
        <h2 className="capitalize w-56 md:text-2xl cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white">
            {
              listByGenre.categories.find(ctg=>ctg.id == params.id )?.name
            }
        </h2>
        
        <div className='grid grid-cols-3 gap-6 mt-7'>
            {
            listByGenre.list.map(movie=>(
              <div key={"movies"+movie.id} className='w-full h-full flex flex-col gap-2 items-center'>
                <Link to={"/detail/"+movie.id+"/type/"+params.type} className='relative w-full h-full flex flex-col gap-2 items-center' >
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

export default ListByGenre