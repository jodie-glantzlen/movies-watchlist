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

module.exports = {
  selectAllMovies,
  insertMovie,
  selectMovieById
}