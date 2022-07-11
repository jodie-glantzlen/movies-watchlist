import React from "react"
import { useSelector } from "react-redux"
import MovieTile from "./MovieTile"

function MovieList() {
  const movies = useSelector((reduxState) => reduxState.movies)
  return (
    <>
      <div className="movie__container">
        {movies.map(movie => <MovieTile key={movie.id} movieData={movie} />)}
      </div>

    </>
  )
}

export default MovieList