import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { getAllMovies } from '../actions/movies'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  return (
    <>
      <header className="header">
        <h1>My Movies Collection</h1>
      </header>
      <section className="main">
        <MovieList />
        {/* add your code here */}
      </section>
    </>
  )
}

export default App
