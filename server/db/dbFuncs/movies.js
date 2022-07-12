const conn = require('../connection')

function selectAllMovies (db = conn) {
  return db('movies').select()
}

function insertMovie(movie, db = conn) {
  return db('movies')
  .insert(movie)
}

function selectMovieById(id, db = conn) {
  return db('movies')
  .where('id', id)
  .select()
  .first()
}

function updateMovie(id, details, db = conn) {
  return db('movies')
  .where('id', id)
  .update(details) // {watched: true}
}

function deleteMovie(id, db = conn) {
  return db('movies').where('id', id).del()
}

module.exports = {
  selectAllMovies,
  insertMovie,
  selectMovieById,
  updateMovie,
  deleteMovie
}