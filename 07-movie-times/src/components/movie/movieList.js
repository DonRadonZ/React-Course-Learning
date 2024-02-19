import React from "react"

import Box from "../Box/box";

function MovieList({movies}){
  return(
    <Box>
      <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID}/>
      ))}
    </ul>
  </Box>
  )
}


function Movie({movie}){
  return(
    <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
              </p>
            </div>
          </li>
  )
}



export default MovieList;