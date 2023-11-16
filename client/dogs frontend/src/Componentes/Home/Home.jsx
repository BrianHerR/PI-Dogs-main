import React, { useEffect, useState, } from 'react'
import Card from '../Card/Card'
import Searchbar from '../Searchbar/Searchbar'
import axios from 'axios'

const Home = ({ onClose}) => {

  const [dogs, setDogs] = useState([])
  const [buscados, setBuscados] = useState([])

  
  

  useEffect(() => {
    const listDogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/dogs');
        setDogs(response.data);
        
      } catch (error) {
        console.error(error.message);
        
      }
    }

    listDogs()
  }, [])
  
  const onSearch = async (name) => {
    
    try {
     
      const response = await axios.get(`http://localhost:3001/dogs/name?name=${name}`);
      console.log(response)
      const { data } = response;
      
     

      if (data.name) {
        setSearchResults([data]);
      }
    } catch (error) {
      console.error(error.message);
      setSearchResults([])
    }
  }

  return (
    <div>
      
      <div>
      <Searchbar onSearch={onSearch}/>
      <select>
                        <option value="Temperamentos">Temperamentos</option>
                        <option value="Origen">Origen</option>
      </select>
      
      
      <select>
        <option value="alfabetico">A-Z</option>
        <option value="Peso">Por peso</option>
      </select>
      <h2>Tus Dogs</h2>
      <div>
      {(buscados.length > 0 ? buscados : dogs).map((dog) => (
          <Card
            key={dog.id}
            id={dog.id}
            image={dog.image}
            name={dog.name}
            temperaments={dog.temperament.join(', ')}
            weight={`Entre ${dog.weight_min} - ${dog.weight_max} kg`}
            onClose={onClose}
          />
        ))}
      </div>
    </div>

    </div>
  )
}

export default Home