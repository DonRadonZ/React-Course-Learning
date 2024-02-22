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
import MovieDetails from "./components/movie/moviedetail";





// use your api key for fetch movie
const KEY = 'f6844654'

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  //const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem('watched'); //returns null if key is not present
    if (storedValue === null) return []; //early return
    return JSON.parse(storedValue);
  });

  function handleSelectedMovie(id){
    setSelectedId(selectedId => id === selectedId ? null : id);
  }
  function handleCloseMovie(){
    setSelectedId(null)
  }

  function handleAddWatched(movie){
    setWatched((watched) => [...watched,movie]);

    // localStorage.setItem('watched', JSON.stringify([...watched, movie]))
  }

  function handleDeleteWatched(id) { 
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  }

  useEffect(function(){
    localStorage.setItem('watched', JSON.stringify(watched));
  },[watched])
 

  useEffect(function () {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal })
          ;
        
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === 'False') throw new Error("Movie not found");
          

      setMovies(data.Search);
        console.log(data.Search);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
        
      } finally {
        setIsLoading(false);
      }
    } 
    if(!query.length){
      setMovies([]);
      setError('')
      return
    }
    handleCloseMovie()
    fetchMovies();

    return function () {
      controller.abort();
    };
  },
    [query]
  );

  
    
  
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
          {selectedId ?(
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
              <WatchedList avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} WatchedBox={WatchedBox} watched={watched} onDeleteWatched={handleDeleteWatched} />
          )}
      </Box>
      </main>
    </>
  );
}




