import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getSearchMovie,
} from "../services/movies";
import { getPopularTv, getTopRatedTv, getUpcomingTv } from "../services/tv";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../components/Menu";

const HomeContainer = ({ genres, type }) => {
  console.log(type);
  const dispatch = useDispatch();
  const searchMovies = useSelector((state) => state.movies.searchMovies);

  const search = useSelector((state) => state.movies.search);

  const list = useSelector((state) => {
    let topRated, populars, upcomings;
    if (type === "tv") {
      topRated = state.tv.topRated;
      populars = state.tv.populars;
      upcomings = state.tv.upcomings;
    } else {
      topRated = state.movies.topRated;
      populars = state.movies.populars;
      upcomings = state.movies.upcomings;
    }

    return { topRated, populars, upcomings };
  });

  useEffect(() => {
    if (type === "tv") {
      dispatch(getPopularTv());
      dispatch(getTopRatedTv());
      dispatch(getUpcomingTv());
    } else {
      dispatch(getPopularMovies());
      dispatch(getTopRatedMovies());
      dispatch(getUpcomingMovies());
    }
  }, []);

  useEffect(() => {
    dispatch(getSearchMovie());
  }, [search]);

  return (
    <>
      {search === "" && (
        <>
          <Banner type={type} />
          {
            type  && <Menu genres={genres} type={type} />
          }
          <section className=" md:space-y-20 pl-[40px]">
            <Row title="Top Rated" list={list.topRated} type={type} />
            <Row title="Popular" list={list.populars} type={type} />
            {type === "tv" ? (
              <Row title="On the Air" list={list.upcomings} type={type} />
            ) : (
              <Row title="Upcoming" list={list.upcomings} type={type} />
            )}
          </section>
        </>
      )}

      {search !== "" && (
        <>
          <div className="pl-[40px] mt-[120px]">
            <p className="font-light text-slate-500">
              Explore titles related to:{" "}
              <span className="text-white ml-4 font-normal">{search}</span>
            </p>
            <Row movies={searchMovies} />
          </div>
        </>
      )}
    </>
  );
};

export default HomeContainer;
