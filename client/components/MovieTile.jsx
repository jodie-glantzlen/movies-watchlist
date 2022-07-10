import React from "react";

function MovieTile(props) {
  const movie = props.movieData
  return (
    <div className="movie_tile">
      <p>{movie.title}</p>
      <img src={movie.img} alt="" />
    </div>
  )
}

export default MovieTile