import { useEffect, useState } from "react";
// import axios from 'axios'

// Navbar Part
import NavBar from "./components/Header/navbar";
import Logo from "./components/Header/logo";
import NumResult from "./components/Header/numresult";
import Search from "./components/Header/search";
import Box from "./components/Box/box";

// page app
import MovieList from "./components/movie/movieList";
import WatchedList from "./components/movie/watched";
import WatchedBox from "./components/movie/summary";
import Loader from "./components/Loader/loader";
import ErrorMessage from "./components/Error/Error";




// use your api key for fetch movie
const KEY = 'f6844654'

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // const tempQuery = "interstellar";

  /*
  useEffect(function(){
    console.log("After initial render");
  },[]);
  useEffect(function(){
    console.log("After every render");
  });
  useEffect(function(){
    console.log("D");
  },[query]);

  console.log("During render");
  */

  function handleSelectedMovie(id){
    setSelectedId(selectedId => id === selectedId ? null : id);
  }
  function handleCloseMovie(){
    setSelectedId(null)
  }

  useEffect(function() {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === 'False') throw new Error("Movie not found");
          

      setMovies(data.Search);
        console.log(data.Search);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    } 
    if(!query.length){
      setMovies([]);
      setError('')
      return
    }
    fetchMovies();
  },  [query]);

  
    
  
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <NavBar>
        <Logo/>
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies}/>
      </NavBar>
      <main className="main">
      {/* {isLoading ? <Loader/> :<MovieList movies={movies}/>}
       */}
      <Box>
        {isLoading && <Loader />}
        {!isLoading && !error && <MovieList
          movies={movies} onSelectMovie={handleSelectedMovie} />}
        {error && <ErrorMessage message={error} />}
      </Box>
      <Box>
      {selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie}/> : <WatchedList avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} WatchedBox={WatchedBox} watched={watched}/>}
      </Box>
      </main>
    </>
  );
}

function MovieDetails({selectedId,onCloseMovie}){
  
  return(<div className="details">
    <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
    {selectedId}</div>)
}