import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = ({genres}) => {

   
  return (
    <div className=" flex gap-14 items-center absolute top-[80px] left-[40px] z-10 ">
      <ul className="demoDropdown">
        <li>
          <a href="#">Genre</a>
          <ul>
            <li>
              {genres?.map((genre) => (
                <Link key={"keyGenre" + genre.id} to={"/movies/"+genre.id}>
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
