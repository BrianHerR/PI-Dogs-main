import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={Styles.contenedor}>
      
      <h1>Welcome</h1>

      <Link to='/home'>
      <button>Iniciar</button>
      
      </Link>

    </div>
  )
}

export default Welcome