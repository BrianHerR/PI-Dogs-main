
import Detail from '../src/Componentes/Detail/Detail'
import './App.css'
import Welcome from './Componentes/Welcome/Welcome'
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Home from '../src/Componentes/Home/Home'
import Form from '../src/Componentes/Form/Form'

import { useEffect, useState } from 'react'
import Nav from './Componentes/Nav/Nav'


function App() {
  
  const navigate = useNavigate();
  const location = useLocation();

  const [dogs, setDogs] = useState([]);

  const [access, setAccess] = useState('false');

  useEffect(()=>{
    !access && navigate('/');
  },[access,navigate]);

  

    const onClose = (id) =>{
    
      setDogs((previoEstado)=> previoEstado.filter((dog)=>dog.id !== id));
    } 

  return (
    <div className='App'>
      {location.pathname !== '/'? <Nav/> : undefined}

      <Routes>
        
        <Route path='/home'  element={<Home onClose={onClose} />}/>
        
        <Route path='/detail/:id'  element={<Detail/>}/>
        
        <Route path='/form' element={<Form/>}/>

        <Route path='/' element={<Welcome/>}/>
      
      </Routes>

    </div>
  )
}

export default App
