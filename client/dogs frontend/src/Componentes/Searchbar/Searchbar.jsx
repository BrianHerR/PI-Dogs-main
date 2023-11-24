import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchName } from '../../redux/actions_types';

const Searchbar = () => {
  
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  

  const handleChange = (event)=>{
       setName(event.target.value);
    }
  const onSearch = (name) =>{
    dispatch(searchName(name))
  }   
  
  
    return (
      <div>

        <input type="search" value={name} onChange={handleChange} placeholder='Buscar por nombre...'/>
        <button  onClick={()=>onSearch(name)}>🔍</button>
      
      </div>
    );
}

export default Searchbar