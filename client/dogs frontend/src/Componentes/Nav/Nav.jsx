import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
import Styles from '../Nav/Nav.module.css'


const Nav = ({onSearch}) => {
  return (
    <div className={Styles.contenedor}>
    
    <Link to='/home'>
    <button  >Home</button>
    </Link>
    
    <Link to='/form'>
    <button>Form</button>
    </Link>

    <Link to='/detail'>
    <button>Details</button>
    </Link>
    
    <Searchbar onSearch={onSearch}/>
    
    </div>
  )
}

export default Nav