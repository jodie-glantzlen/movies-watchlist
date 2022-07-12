import React from "react";
import { useDispatch } from "react-redux";
import { removeMovie, setAsWatched } from "../actions/movies";

function MovieTile(props) {
  const movie = props.movieData
  const dispatch = useDispatch()

  const handleWatched = () => {
    dispatch(setAsWatched(movie.id))
  }

  const handleDelete = () => {
    dispatch(removeMovie(movie.id))
  }

  return (
    <div className="movie__tile">
      <h3>{movie.title}</h3>
      <img src={movie.img} alt="" />
      <button onClick={handleWatched}>
        {movie.watched ? '✅' : 'Watched'}
      </button>
      <button onClick={handleDelete}>Delete</button>

    </div>
  )
}

export default MovieTile
