import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h1>Watchlist</h1>
      <div>
        <Link to='/'>All Movies</Link>
        <Link to='/add'>Add New</Link>
      </div>
    </nav>
  )
}

export default Nav