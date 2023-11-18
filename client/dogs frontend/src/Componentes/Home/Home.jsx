import React, {useState, useId}from 'react'
import Card from '../Card/Card'
import Paginate from '../Paginate/Paginate'
import { useSelector, useDispatch } from 'react-redux'
import Styles from '../Home/Home.module.css'
import { filterDogs, orderDogs } from '../../redux/actions_types'




const Home = () => {
  
  const dispatch = useDispatch()
  const [filtro, setFiltro] = useState('')
  const [orden, setOrden] = useState('')
  const [origen, setOrigen] = useState('')
  const [tempe, setTempe] = useState('')
  const [direction, setDirection] = useState('')
  const temperaments = useSelector(state => state.temperaments)
  const dogs = useSelector(state => state.dogs)
  const [currentPage, setCurrentPage] = useState(1);
  const dogsByPag = 8;
  const lastIndex = currentPage * dogsByPag 
  const firstIndex = lastIndex - dogsByPag
  const currentDogs = dogs.slice(firstIndex, lastIndex)
  
  const paginado = (Number) => {
    setCurrentPage(Number)
  }
  const handleFilterChange = (Event) =>{
    setFiltro(Event.target.value)
  }
  const handleTempe = (Event) =>{
    setTempe(Event.target.value)
    dispatch(filterDogs(filtro, tempe))
  }
  const handleOrder = (Event) =>{
    setOrden(Event.target.value)
    dispatch(orderDogs(orden, direction))
  }
  const handleDirection = (Event) =>{
    setDirection(Event.target.value)
  }
  const handleOrigen = (Event) => {
    setOrigen(Event.target.value)
    dispatch(filterDogs(filtro, origen))
  }
  



  
  
  
  return (
    <div>
      
      <div>
      
      <select  onChange={handleFilterChange}>
          <option value="">Filtrar por</option>
          <option value="temperamento">Temperamentos</option>
          <option value="origen">Origen</option>
        </select>

        {filtro === 'temperamento' ? (
          <select onChange={handleTempe}>
            <option value="">Selecciona un temperamento</option>
            {temperaments.map((tempe) => (
              <option key={useId()} value={tempe}>
                {tempe}
              </option>
            ))}
          </select>
        ) : undefined}
        {filtro === 'origen'?(
          <select onChange={handleOrigen}>
            <option value="">Selecciona un Origen</option>
            <option value="api">Api</option>
            <option value="database">Base de datos</option>
          </select>
        ):undefined}

        <select onChange={handleOrder} >
          <option value="">Ordenar por</option>
          <option value="A-Z">A-Z</option>
          <option value="Peso">Peso</option>
        </select>

        <select onChange={handleDirection}>
          <option value="asc">Ascendente</option>
          <option value="des">Descendente</option>
        </select>
      <h2>Tus Dogs</h2>
      <div className={Styles.contenedor}>
      {currentDogs?.map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            image={dog.image}
            name={dog.name}
            temperaments={dog.temperament?.join(', ')}
            weight={`Entre ${dog.weight_min} - ${dog.weight_max} kg`}
            
          />
        ))}
      </div>
    </div>
    <div>
        <Paginate dogsByPag={dogsByPag} dogs={dogs} paginado={paginado}/>
      </div>
    </div>
  )
}

export default Home