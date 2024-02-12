import React,{useState} from "react"

function Search(){
    const [query, setQuery] = useState("");
    return(
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
    )
}

function Logo(){
    return(
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
    )
}

function NumResult({movies}){
    return(
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
    )
}

function NavBar({movies}){
    
    return(
        <>
        <nav className="nav-bar">
        <Logo/>
        <Search/>
        <NumResult movies={movies}/>
      </nav>
        </>
    )
}

export default NavBar