import React from "react"
import { useSelector } from "react-redux"
import MovieTile from "./MovieTile"

function MovieList() {
  const movies = useSelector((reduxState) => reduxState.movies)
  return (
    <>
      <h2>My list:</h2>
      <div className="movie_container">
        {movies.map(movie => <MovieTile key={movie.id} movieData={movie} />)}
      </div>

    </>
  )
}

export default MovieList