
import Detail from '../src/Componentes/Detail/Detail'
import './App.css'
import Welcome from './Componentes/Welcome/Welcome'
import { Routes, Route, useLocation, } from 'react-router-dom'
import Home from '../src/Componentes/Home/Home'
import Form from '../src/Componentes/Form/Form'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from './Componentes/Nav/Nav'
import {useSelector , useDispatch} from 'react-redux'
import { orderDogs, allDogs, allTempe, filterDogs } from './redux/actions_types'


function App() {
  
  const dispatch = useDispatch();
  const location = useLocation();

  const dogs = useSelector(state => state.dogs);

  

  useEffect(() => {
    dispatch(allDogs())
    dispatch(allTempe())
  }, [dispatch])
  
    
  

  return (
    <div className='App'>
      {location.pathname !== '/'? <Nav/> : undefined}

      <Routes>
        
        <Route path='/home'  element={<Home dogs={dogs} />}/>
        
        <Route path='/detail/:id'  element={<Detail/>}/>
        
        <Route path='/form' element={<Form/>}/>

        <Route path='/' element={<Welcome/>}/>
      
      </Routes>

    </div>
  )
}

export default App
