

function WatchedList({avgImdbRating, avgUserRating,avgRuntime, WatchedBox , watched,onDeleteWatched}){
    return(
      <>
        <WatchedBox watched={watched} avgImdbRating={avgImdbRating} avgUserRating={avgUserRating} avgRuntime={avgRuntime} /><br/>
            <Watched watched={watched} onDeleteWatched={onDeleteWatched}/><br/>
              </>
    );
}

function Watched({watched,onDeleteWatched}){
    return(
        <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbId}>
                    <img src={movie.poster} alt={`${movie.title} poster`} />
                    <h3>{movie.title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating.toFixed(2)}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating.toFixed(2)}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                      <button
                        className="btn-delete"
                        onClick={() => onDeleteWatched(movie.imdbId)}
                      >X</button>
                    </div>
                  </li>
                ))}
              </ul>
    )
}

export default WatchedList