
import Detail from '../src/Componentes/Detail/Detail'
import './App.css'
import Welcome from './Componentes/Welcome/Welcome'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Componentes/Home/Home'
import Form from '../src/Componentes/Form/Form'
import axios from 'axios'


function App() {
  
  //const navigate = useNavigate();
  const location = useLocation();

  const [dogs, setDogs] = useState([]);

  const onSearch =  async (id)=>{
    const dog = await axios.get('')
  }
  return (
    <div>
      {location.pathname !== '/'? <Nav onSearch = {onSearch}/> : undefined}

      <Routes>
        
        <Route path='/home'  element={<Home/>}/>
        
        <Route path='/detail'  element={<Detail/>}/>
        
        <Route path='/form' element={<Form/>}/>

        <Route path='/' element={<Welcome/>}/>
      
      </Routes>

    </div>
  )
}

export default App
