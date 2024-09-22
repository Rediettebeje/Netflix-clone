import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios from './axios';
import requests from './request';

function Banner() {
    const [movie, setMovie] = useState([]);
      useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrginalls);
      console.log(request.data.results);
        setMovie(
            request.data.results[
    Math.floor(Math.random() * request.data.results.length)
    ]
    );
      return request;
    }
    fetchData();
  }, []);
// console.log(movie)
    function truncate(str, n) {
    return str?.length > 0 ? str.substr(0, n-1) + "..." : str
}
    return (
        <header className='banner'
           style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
        >
            <div className='banner_contents'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie.orginal_name} 
                </h1>
                    <div className='banner_buttons'> 
                    <button className='banner_button'>play</button>
                     <button className='banner_button'>my list</button>
                </div>
                {/* <h1 className='banner_description'>{movie?.overview}</h1> */}
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1> 
                 {/* <h1 className='banner_description'>{trancate{movie?.overview, 150}}</h1> */}
            </div> 
            <div className='banner_fadeBottom'/>
      </header>
    
  )
}

export default Banner;