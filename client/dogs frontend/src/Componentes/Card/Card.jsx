import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Card.module.css'

const Card = (props) => {
  
  const { id, name, weight, temperaments, image} = props
  
  return (
    <div className={Styles.contenedor}>
      
        
        <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
        </Link>
        
        <p>temperamentos: {temperaments}</p>
        
        <h2>Peso: {weight}</h2>

        

        <img src={image} alt="" />
    </div>
  )
}

export default Card