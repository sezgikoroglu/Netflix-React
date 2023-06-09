import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Menu from "../components/Menu";

const GenreContainer = ({genres,type}) => {
  return (
    <div>
      <Banner/>
      <Menu genres={genres} type={type}/>
      <section className=' md:space-y-20 pl-[40px]'>
        {/* <Row title="Top Rated" movies={topRated} /> */}
      </section>
    </div>
  )
}

export default GenreContainer