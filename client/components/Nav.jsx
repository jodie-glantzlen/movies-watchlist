import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/add'}>Add a new movie</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav