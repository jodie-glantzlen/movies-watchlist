import { deleteMovie, fetchAllMovies, patchMovieDetails, postMovie } from "../apis/movies"

// TYPE VARS
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SEND_MOVIE = 'SEND_MOVIE'
export const MODIFY_MOVIE = 'MODIFY_MOVIE'
export const DEL_MOVIE = 'DEL_MOVIE'


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

function modifyMovie(movie) {
  return {
    type: 'MODIFY_MOVIE',
    payload: movie
  }
}

function delMovie(movieId) {
  return {
    type: 'DEL_MOVIE',
    payload: movieId
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

export function setAsWatched(id) {
  return (dispatch) => {
    patchMovieDetails(id, {watched: true})
    .then((updatedMovieObj) => {
      dispatch(modifyMovie(updatedMovieObj))
    })
    .catch(err => console.log(err.message))
  }
}

export function removeMovie(movieId) {
  return (dispatch) => {
    deleteMovie(movieId)
    .then(() => {
      dispatch(delMovie(movieId))
    })
    .catch(err => console.log(err.message))
  }
}