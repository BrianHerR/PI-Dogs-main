import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import Styles from '../Nav/Nav.module.css'


const Nav = ({onSearch}) => {
  
  
  return (
    <div className={Styles.contenedor}>
    <div className={Styles.nav}>

    <Link to='/home'>
    <button className={Styles.button} >Home</button>
    </Link>
    
    <Link to='/form'>
    <button className={Styles.button}>Form</button>
    </Link>

    <Link to='/detail'>
    <button className={Styles.button}>Details</button>
    </Link>
    </div>
    
    <div className={Styles.buscador}>

    <Searchbar onSearch={onSearch}/>
    </div>
    
    </div>
  )
}

export default Nav