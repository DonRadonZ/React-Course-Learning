import Box from "../Box/box";

function WatchedList({avgImdbRating, avgUserRating,avgRuntime, WatchedBox , watched}){
    return(
      <Box>
              <WatchedBox watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime}/>
              <Watched watched={watched}/>
      </Box>
    );
}

function Watched({watched}){
    return(
        <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
    )
}

export default WatchedList