// import React,{useState,useEffect} from 'react'
// import "./Row.css"
// import axios from './axios'

// let base_Url = 'https://image.tmdb.org/t/p/original/'

// function Row({ title, fetchUrl }) {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(fetchUrl);
//             console.log(request.data.results)
//             setMovies(request.data.results);
//             return request;
//         }
//         fetchData()
//     }, [fetchUrl]);
//          console.log(movies)
//   return (
//     <div className='row'>
//       <h1>{title} </h1>
//       <div className='row-posters'> 
//         {movies.map((movie) => {
//           <img className='row-poster'
//             src={`${base_Url}${movie.poster_path}`} 
//             alt={movie.name}
//           />
//         })
//         }
//       </div>
//     </div>
    
//   )
// }

// export default Row

import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_Url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [traileUrl, setTraileUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
     playerVars: { 
        autoplay: 1,
    }
}
  // console.log(movies);
  const handleClick = (movie) => {
    if (traileUrl) {
      setTraileUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie.original_name)
        .then((url) => {
         
          const searchParams = new URLSearchParams(new URL(url).search);
        
          setTraileUrl(searchParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row-posters'>
        {movies.map((movie) => (
          <img
            key={movie.id} // Added a unique key prop for each poster
            onClick={() => handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_Url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            // isLargeRow ? movie.poster_path : movie.backdrop_path

            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {traileUrl && <YouTube videoId={traileUrl} opts={opts} />}
      </div>
    </div>
  ); 
}

export default Row;
