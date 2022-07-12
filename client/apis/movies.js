import request from 'superagent'

export function fetchAllMovies() {
  return request.get('/api/v1/movies')
  .then(res => res.body)
}

export function postMovie(movie) {
  // formatting the response from the external api to our db
  const formattedMovie = {
    title: movie.title,
    imdb_id: movie.id,
    img: movie.image
  }

  return request.post('/api/v1/movies')
  .send(formattedMovie)
  .then(res => res.body)
  .catch(err => console.log(err.message))
}

export function patchMovieDetails(id, details) {
  return request.patch(`/api/v1/movies/${id}`)
  .send(details)
  .then(res => res.body)
  .catch(err => console.log(err.message))
}

export function deleteMovie(id) {
  return request.delete('/api/v1/movies/:id')
  .then(() => id)
}

// patch: change one little piece of the thing
// put: change the whole thing