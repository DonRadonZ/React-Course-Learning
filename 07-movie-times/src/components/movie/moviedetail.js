import React,{useState,useEffect,useRef} from "react";
import { useKey } from "../useKey/useKey";
import Loader from "../Loader/loader";
import StarRating from "../StarRating/starrating";

const KEY = 'f6844654'

export default function MovieDetails({ selectedId, onCloseMovie,onAddWatched,watched }) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState('');
  
    const countRef = useRef(0);

    useEffect(
    function(){
      if(userRating)  countRef.current = countRef.current++;
      },
    [userRating]
  );

    const isWatched = watched.map((movie) => movie.imdbId).includes(selectedId);
    const watchedUserRating = watched.find(movie => movie.imdbId === selectedId)?.userRating;

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

    

    // if(imdbRating > 8) [isTop,setIsTop] = useState(true);

    // if(imdbRating>8) return <p>Greatest ever!</p>

    const [isTop, setIsTop] = useState(imdbRating > 8);
    console.log(isTop)
    useEffect(function(){
        setIsTop(imdbRating > 8);
    },
    [imdbRating]
)

    // const [avgRating, setAvgRating] = useState(0)
  
    function handleAdd() {
      const newWatchedMovie = {
        imdbId: selectedId,
        title,
        year,
        poster,
        imdbRating: Number(imdbRating),
        runtime: runtime.split(' ').at(0),
        userRating,
        countRatingDecisions: countRef.current,
      }
  
      onAddWatched(newWatchedMovie);
      onCloseMovie();
    // setAvgRating(Number(imdbRating))
    // setAvgRating((avgRating) => (avgRating+userRating) / 2)
    }

    useKey('Escape', onCloseMovie)
  
    useEffect(
      function () {
        function callback(e) {
       if (e.code === 'Escape') {
         onCloseMovie();
       }
     }
     
     document.addEventListener('keydown', callback );
      return function () {
       document.removeEventListener('keydown', callback )
      }
    },
     [onCloseMovie]
   );
  
    useEffect(function () {
      async function getMovieDetails() { 
        setIsLoading(true)
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },[selectedId]
    );
  
    useEffect(function () {
      if(!title) return;
      document.title = `Movie | ${title}`;
  
      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
      [title]
    );
    
    return (
      <div className="details">
        {isLoading ? (
          <Loader />
        ) : (
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
            <p><span>🌟</span>{imdbRating} Imdb Rating</p>
          </div>
        </header>
        
        {/* <p>{avgRating}</p> */}

        <section>
          <div className="rating">
                  {!isWatched ?(
                    <>
                    <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick=
                    {handleAdd}>
                    + Add to List
                        </button>
                  
                      )}
                    </>
                  ) : (
                      <p>You rated with movie {watchedUserRating} <span>⭐️</span></p>
                  )}
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