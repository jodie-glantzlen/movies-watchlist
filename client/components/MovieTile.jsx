import React from "react";

function MovieTile(props) {
  const movie = props.movieData
  return (
    <div className="movie__tile">
      <h3>{movie.title}</h3>
      <img src={movie.img} alt="" />
    </div>
  )
}

export default MovieTile