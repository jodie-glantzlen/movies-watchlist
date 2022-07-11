import React from "react";
import { useDispatch } from "react-redux";
import { setAsWatched } from "../actions/movies";

function MovieTile(props) {
  const movie = props.movieData
  const dispatch = useDispatch()

  const handleClick = () => {
    console.log('clicked: ', movie.id)
    dispatch(setAsWatched(movie.id))
  }

  return (
    <div className="movie__tile">
      <h3>{movie.title}</h3>
      <img src={movie.img} alt="" />
      {!movie.watched && <button onClick={handleClick}>Watched</button>}
    </div>
  )
}

export default MovieTile