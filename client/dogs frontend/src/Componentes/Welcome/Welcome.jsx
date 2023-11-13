import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      
      <h1>Welcome</h1>

      <Link to='/home'>
      <button>Iniciar</button>
      
      </Link>

    </div>
  )
}

export default Welcome