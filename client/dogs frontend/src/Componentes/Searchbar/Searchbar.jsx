import React, {useState} from 'react'


const Searchbar = ({onSearch}) => {
  
  const [name, setName] = useState('');
  

    const handleChange = (event)=>{
       setName(event.target.value);
       
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      
      onSearch(name);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">🔍</button>
      </form>
    );
}

export default Searchbar