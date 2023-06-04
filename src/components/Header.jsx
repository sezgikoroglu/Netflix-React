import React from 'react'
import {SearchIcon, BellIcon} from "@heroicons/react/solid"
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchMovie } from '../services/movies';
import { setSearch } from '../store/features/moviesSlice';

const Header = () => {

    const dispatch=useDispatch();
    const search = useSelector((state) => state.movies.search);  

    const [isScrolled,setisScrolled]=useState(false)
    const [toggle,setToggle]=useState(false)
    const [input,setInput]=useState("")

    const toggleFunction=()=>{
      toggle===false ? setToggle(true) : setToggle(false)
    }

    useEffect(()=>{
      dispatch(getSearchMovie(input))
    },[input])

    useEffect(()=>{
        console.log(isScrolled)
        const handleScroll=()=>{
          if(window.scrollY>0){
            setisScrolled(true)
          }else{
            setisScrolled(false)
          }
        }
        window.addEventListener("scroll",handleScroll)
        return ()=>{
          window.removeEventListener("scroll",handleScroll)
        }
    },[])

  return (
    <header className={` transition duration-500 ease-out ${isScrolled && "bg-[#141414]  "}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Link to={"/"}>
          <img
          width={100}
          height={100}
          className='cursor-pointer'
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        </Link>

        <ul className='flex space-x-4'>
          <Link to={"/movies"}><li className='headerLink'>Movies</li></Link>
          <Link to={"/tvShows"}><li className="headerLink">TV Shows</li></Link> 
          <Link to={"/newAndpopular"}><li className="headerLink">New & Popular</li></Link>
          <Link to={"/list"}><li className="headerLink">My List</li></Link>
        </ul>   
      </div>

      <div className='flex space-x-4 items-end'>
        <div className='absolute right-[170px] top-[25px] inline-block'>
          
          {toggle===false && <input className='w-[0px] h-[0px] bg-black text-white font-thin  ease-in duration-300 pl-9' type="text" placeholder='Titles,people,genres'/>}
          {toggle===true  && <input className='w-[240px] h-[34px] bg-black text-white  ease-in duration-300 pl-9 border ' 
                              onChange={(e)=>{dispatch(setSearch(e.target.value))}}
                              type="text" placeholder='Titles,people,genres'/>}
          <SearchIcon className="sm hidden h-6 w-6 sm:inline text-white absolute top-[6px] left-[1px] cursor-pointer" onClick={toggleFunction} />
        </div>
        <p className='text-white'>Kids</p>
        <BellIcon className="h-6 w-6  text-white" />
        <img
            src="https://rb.gy/g1pwyx"
            alt="img"
            className="cursor-pointer rounded"
          />
      </div>
    </header>
  )
}
//absolute -translate-y-1/2 top-1/2 left-2

export default Header