import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
    
    <Link to='/home'>
    <button  >Home</button>
    </Link>
    
    <Link to='/form'>
    <button>Form</button>
    </Link>

    <Link to='/detail'>
    <button>Details</button>
    </Link>
    
    
    
    </div>
  )
}

export default Nav