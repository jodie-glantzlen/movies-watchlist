const express = require('express')
const path = require('path')
const moviesRoutes = require('./routes/movies')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1/movies', moviesRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
