import { RECEIVE_MOVIES } from "../actions/movies"

function reducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.payload
    default:
      return state
  }
}

export default reducer