import React, { useState } from "react";
import { addMovie } from "../actions/movies";
import { searchForMovie } from '../apis/imdb'
import {useDispatch} from 'react-redux'

function AddForm() {
  const dispatch = useDispatch()
  
  const [newMovie, setNewMovie] = useState('')
  const [results, setResults] = useState([])
  const [added, setAdded] = useState([])

  const handleTyping = (evt) => {
    setNewMovie(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    searchForMovie(newMovie)
      .then((arr) => {
        setResults(arr)
      })
      .catch(err => console.log(err.message))
  }

  const handleAdd = (movie) => {
    console.log(movie)
    dispatch(addMovie(movie))
    setAdded([...added, movie.id])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Search for a new movie:
          <input onChange={handleTyping} name='welcome' value={newMovie} type='text' />
        </label>
        <button>Done!</button>
      </form>
      <ul>
        {results.map(movie =>
        (<li key={movie.id}>
          {movie.title} {movie.description}
          <button onClick={() => handleAdd(movie)}>
            {added.includes(movie.id) ? '✅' : 'Add to Watchlist'}
          </button>
        </li>))}
      </ul>
    </>
  )
}

export default AddForm