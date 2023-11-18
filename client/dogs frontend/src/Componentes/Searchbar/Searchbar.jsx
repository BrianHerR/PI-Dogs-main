import React, {useState} from 'react'


const Searchbar = ({onSearch}) => {
  
  const [name, setName] = useState('');
  

    const handleChange = (event)=>{
       setName(event.target.value);
       
    }
    
  
  
    return (
      <div>

        <input type="search" value={name} onChange={handleChange} />
        <button  onClick={()=>onSearch(name)}>🔍</button>
      
      </div>
    );
}

export default Searchbar