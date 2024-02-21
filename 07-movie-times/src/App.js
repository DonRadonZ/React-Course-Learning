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
import StarRating from "./components/StarRating/starrating";




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




function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading,setIsLoading] = useState(false)
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;



  useEffect(function () {
    async function getMovieDetails() { 
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${selectedId}`);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  },[selectedId])
  
  return (
    <div className="details">
      {isLoading ? <Loader /> : (
        <>
      <header>
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
        </button>
        <img src={poster} alt={`Poster of ${movie} movie`} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p><span></span>{imdbRating}</p>
        </div>
      </header>
      
      <section>
        <div className="rating">
        <StarRating maxRating={10}  size={24} />
        </div>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
      
          {selectedId}
          </>
  )}
    </div>
  )
}