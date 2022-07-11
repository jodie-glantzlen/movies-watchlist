import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { getAllMovies } from '../actions/movies'
import { useDispatch } from 'react-redux'
import AddForm from './AddForm'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMovies())
  }, [])

  return (
    <>
      <Nav />
      <header className="header">
        <h1>My Movies Collection</h1>
      </header>
      <section className="main">
        <Routes>
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/add" element={<AddForm />}></Route>
        </Routes>
      </section>
    </>
  )
}

export default App
