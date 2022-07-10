const express = require('express')
const router = express.Router()
const moviesDb = require('../db/dbFuncs/movies')

router.get('/', (req, res) => {
  moviesDb.selectAllMovies()
  .then((allMovies) => {
    res.json(allMovies)
  })
  .catch(err => res.status(500).json({msg: err.message}))
})

module.exports = router