import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Form = () => {
  
  const [inputs, setInputs] = useState({
    nombre:'',
    image:'',
    weight_max:'',
    weight_min:'',
    height_max:'',
    height_min:'',
    life_span_max:'',
    life_span_min:'',
    temperament: []
  });

  const [tempe, setTempe] = useState([])

  useEffect(() => {
    const temperamentos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/temperaments');
        setTempe(response.data);
      } catch (error) {
        console.error('Error al obtener temperamentos:', error);
      }
    };

    temperamentos();
  }, [])

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      const newTemperaments = checked
        ? [...inputs.temperament, value]
        : inputs.temperament.filter((temp) => temp !== value);

      setInputs({ ...inputs, temperament: newTemperaments });
    } else {
      setInputs({ ...inputs, [name]: value });
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate({ ...inputs, [name]: value }),
    }));
  }



  const [errors, setErrors] = useState({});

  

  const handleSubmit = (event) => {
    event.preventDefault();
    login(inputs);
  }
  
  return (
    
    <div> 
    
    <form onSubmit={handleSubmit}>
        
    <div>
    
    <label>Nombre</label>
    
    <input type="text" onChange={handleChange} name='nombre' value={inputs.nombre}/>
    
    <span>{errors.nombre}</span>

    <label>Imagen</label>
    
    <input type="text" onChange={handleChange} name='image' value={inputs.image}/>
    
    <span>{errors.image}</span>
    
    </div>

    <div>
    
    <h3>Años de vida</h3>
    
    <label>Minimo</label>
    
    <input type="life_span_min" onChange={handleChange} name='life_span_min' value={inputs.life_span_min}/>
   
    <span>{errors.life_span_min}</span>

    <label>Maxima</label>
    
    <input type="life_span_max" onChange={handleChange} name='life_span_max' value={inputs.life_span_max}/>
   
    <span>{errors.life_span_max}</span>
    
    </div>

    <div>
    <h3>Peso</h3>
    
    <label>Minimo</label>
    
    <input type="weight_min" onChange={handleChange} name='weight_min' value={inputs.weight_min}/>
   
    <span>{errors.weight_min}</span>

    <label>Maxima</label>
    
    <input type="weight_max" onChange={handleChange} name='weight_max' value={inputs.weight_max}/>
   
    <span>{errors.weight_max}</span>
    
    </div>

    <div>
    
    <h3>Altura</h3>
    
    <label>Minimo</label>
    
    <input type="height_min" onChange={handleChange} name='height_min' value={inputs.height_min}/>
   
    <span>{errors.height_min}</span>

    <label>Maxima</label>
    
    <input type="height_max" onChange={handleChange} name='height_max' value={inputs.height_max}/>
   
    <span>{errors.height_max}</span>
    
    </div>
    <div>
          <h3>Temperamento</h3>
          {temperamentos.map((temp) => (
            <div key={temp}>
              <input
                type="checkbox"
                id={temp}
                name="temperament"
                value={temp}
                checked={inputs.temperament.includes(temp)}
                onChange={handleChange}
              />
              <label htmlFor={temp}>{temp}</label>
            </div>
          ))}
          <span>{errors.temperament}</span>
        </div>
    <div>

    </div>
    
    <button>Ingresar</button>

  </form>
  
  </div>
  )
}

export default Form