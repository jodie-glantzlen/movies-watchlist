import { fetchAllMovies, postMovie } from "../apis/movies"

// TYPE VARS
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SEND_MOVIE = 'SEND_MOVIE'


// ACTION CREATORS

function receiveMovies(moviesArr) {
  return {
    type: 'RECEIVE_MOVIES',
    payload: moviesArr
  }
}

function sendMovie(movie) {
  return {
    type: 'SEND_MOVIE',
    payload: movie
  }
}


// THUNKS

export function getAllMovies() {
  return (dispatch) => {
    fetchAllMovies()
    .then((moviesArr) => {
      dispatch(receiveMovies(moviesArr))
    })
    .catch(err => console.log(err.message))
  }
}

export function addMovie(movie) {
  return (dispatch) => {
    postMovie(movie)
    .then((body) => {
      dispatch(sendMovie(body))
    })
    .catch(err => console.log(err.message))
  }
}