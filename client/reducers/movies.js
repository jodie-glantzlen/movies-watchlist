import { RECEIVE_MOVIES, SEND_MOVIE } from "../actions/movies"

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload
    case SEND_MOVIE:
      return [...state, action.payload]
    default:
      return state
  }
}

export default reducer