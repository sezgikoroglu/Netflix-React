import React from "react";
//import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector} from "react-redux";
import { getTopRatedMovies } from "../services/movies";
import { useEffect,useState } from "react";
import { BASE_URL } from "../services/movies";

const Banner = () => {

  const dispatch=useDispatch();
  const [movie,setMovie]=useState()
  const topRated= useSelector(
    (state) => state.movies.topRated
  );

  useEffect(() => {
    dispatch(getTopRatedMovies())
  }, []);

  useEffect(()=>{
    if (topRated) {
      setMovie(topRated[Math.floor(Math.random() * topRated.length)])
    }
  }, [topRated])

  return (
   <div className="relative flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[75vh] justify-center lg:pb-12 px-10">
      <div className="absolute top-0 left-0 h-[95vh] w-screen z-0">
        <div className="relative">
          <img
            src= {`https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path} `}
            className="object-cover w-full h-full"
            alt="photo"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        </div>
      </div>
      <div className="relative z-10 space-y-8 mt-8">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl text-white">
          {movie?.title}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-white line-clamp-3">
          {movie?.overview}
        </p>

        <div className="flex space-x-3">
          <button className="bannerButton bg-white text-black">Play</button>
          <button className="bannerButton bg-[gray]/70">
            More Info{" "}
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
