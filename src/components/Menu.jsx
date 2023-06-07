import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = ({genres,type}) => {

   console.log(type)
  return (
    <div className=" flex gap-14 items-center absolute top-[80px] left-[40px] z-10 ">
      {
        type==="movie" ? <h2 className="mr-[15px] font-medium text-4xl">Movies</h2> : <h2 className="mr-[15px] font-medium text-4xl">TV Shows</h2>
      }
      <ul className="demoDropdown">
        <li>
          <a href="#">Genre</a>
          <ul>
            <li>
              {genres?.map((genre) => (
                <Link key={"keyGenre" + genre.id} to={"/genre/"+genre.id+"/type/"+type}>
                  {genre.name}
                </Link>
              ))}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
