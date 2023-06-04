import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({ movie }) => {
  return (
    <div
      className="relative h-[130px]  min-w-[180px] cursor-pointer transition duration-200
    ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <div className="relative h-[130px]">
        <Link to={"/movie/"+movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${
              movie.poster_path || movie?.poster_path
            }`}
            className="rounded-sm  w-full h-full object-cover md:rounded"
            alt="img"
            sizes="(max-width: 768px) 118px,
                (max-width: 1200px) 180px,
                "
          />
        </Link>
      </div>
    </div>
  );
};

export default Thumbnail;
