import { fetchAllMovies } from "../apis/movies"

// TYPE VARS
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'


// ACTION CREATORS

function receiveMovies(moviesArr) {
  return {
    type: 'RECEIVE_MOVIES',
    payload: moviesArr
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