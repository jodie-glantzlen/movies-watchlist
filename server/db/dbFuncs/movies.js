const conn = require('../connection')

function selectAllMovies (db = conn) {
  return db('movies').select()
}

module.exports = {
  selectAllMovies
}