import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Styles from './Detail.module.css'

const Detail = () => {
  
  const { id } = useParams()
  
  const [dog, setDog] = useState({})

  useEffect(  ()=>{
    const detalle = async () => {

      try {
        
        const response = await axios.get(`http://localhost:3001/dogs/${id}`)
        const {data} = response
        
        if(data){
          setDog(data[0])
          
        }
        
      } catch (error) {
        console.error(error)
      }
    }
    detalle()
    
  },[id])
  
  return (
    <div className={Styles.contenedor}>

    <div className={Styles.contenedorPrincipal}>
      <div className={Styles.image}>

     
      <img src={dog?.image} alt="" />
      </div>
      <div className={Styles.detail}>

      <h3>{dog?.name}</h3>
      <h4>{`Peso: Entre ${dog?.weight_min} - ${dog?.weight_max} kg`}</h4>
      <h4>{`Altura: Entre ${dog?.height_min} - ${dog?.height_max} cm`}</h4>
      <h4>{`Años de vida: Entre ${dog?.life_span_min} - ${dog?.life_span_max}`}</h4>
      <p>{dog?.temperament?.join(', ')}</p>
      <span>{dog?.id}</span>
      </div>

    </div>
    </div>
  )
}

export default Detail