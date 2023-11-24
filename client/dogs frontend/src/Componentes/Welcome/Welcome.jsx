import React from 'react'
import {Link} from 'react-router-dom'
import Styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={Styles.view}>

    <div className={Styles.contenedor}>
      
      <h1>Welcome</h1>

      <span className={Styles.huesoLeft1}></span>
      <span className={Styles.huesoLeft2}></span>
      <Link to='/home'>
      <button className={Styles.hueso}>Iniciar</button>
      </Link>
      <span className={Styles.huesoRight1}></span>
      <span className={Styles.huesoRight2}></span>
    </div>
    </div>
  )
}

export default Welcome