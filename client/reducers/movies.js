import {
  DEL_MOVIE,
  MODIFY_MOVIE,
  RECEIVE_MOVIES,
  SEND_MOVIE,
} from '../actions/movies'

function reducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload
    case SEND_MOVIE:
      return [...state, action.payload]
    case MODIFY_MOVIE:
      return state.map((movie) => {
        const updatedMovie = action.payload
        if (movie.id === updatedMovie.id) {
          return updatedMovie
        }
        return movie
      })
    case DEL_MOVIE:
      return state.filter((movie) => movie.id !== action.payload)
    default:
      return state
  }
}

export default reducer
