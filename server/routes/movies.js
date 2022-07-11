const express = require('express')
const router = express.Router()
const moviesDb = require('../db/dbFuncs/movies')

//GET /api/v1/movies

router.get('/', (req, res) => {
  moviesDb
    .selectAllMovies()
    .then((allMovies) => {
      res.json(allMovies)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// POST /api/v1/movies

router.post('/', (req, res) => {
  const newMovie = req.body
  moviesDb
    .insertMovie(newMovie)
    .then((idArr) => {
      const newMovieId = idArr[0]
      return moviesDb.selectMovieById(newMovieId)
    })
    .then((newMovieObj) => {
      res.json(newMovieObj)
    })
    .catch((err) => res.status(500).json({ msg: err.message }))
})

// PATCH /api/v1/movies/:id

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const detailsToUpdate = req.body

  moviesDb.updateMovie(id, detailsToUpdate)
  .then(() => {
    return moviesDb.selectMovieById(id)
  })
  .then((updatedMovie) => {
    res.json(updatedMovie)
  })
  .catch((err) => res.status(500).json({ msg: err.message }))
})

module.exports = router
