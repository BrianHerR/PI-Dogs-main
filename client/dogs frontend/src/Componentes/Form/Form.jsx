import React, { useEffect, useState } from 'react'
import Styles from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { allTempe, postDogs } from '../../redux/actions_types';
import validate from '../Form/validate'

const Form = () => {
  

    const dispatch = useDispatch()
    const temperamentos = useSelector((state) => state.temperaments)

    const [inputs, setInputs] = useState({
      name:'',
      weight_max: 0,
      weight_min: 0,
      height_max: 0,
      height_min: 0,
      life_span_max: 0,
      life_span_min: 0,
      temperament: []
    });

    const [errors, setErrors] = useState({
      name: '',
      weight_max: '',
      weight_min: '',
      height_max: '',
      height_min: '',
      life_span_max: '',
      life_span_min: '',
      temperament: '',
    });


    useEffect(() => {
      dispatch(allTempe())
    }, [dispatch])

    const handleChange = (Event) => {
      setErrors(validate({ ...inputs, [Event.target.name]: Event.target.value }))
      setInputs({ ...inputs, [Event.target.name]: Event.target.value })
    }
    const handleChangeTempe = (Event) => {

      if (inputs.temperament.length > 5) {
        setErrors({ ...errors, temperament: 'Solo se puede tener un máximo de 5' })
      } else {
        setInputs({ ...inputs, temperament: [...inputs.temperament, Event.target.value] })

      }}
      const handleSumit = (event) => {
        event.preventDefault()
        console.log(inputs)
        dispatch(postDogs(inputs))
      }


      return (

        <div className={Styles.view}>

          <div className={Styles.contenedorPrincipal}>
            <h2 className={Styles.title}>Tu Dog</h2>
            <form className={Styles.form} onSubmit={handleSumit}>

              <div className={Styles.name_image}>

                <label className={Styles.white}>Nombre</label>

                <input onChange={handleChange} type="text" name='name' value={inputs.name} />
                {errors.name && <span className={Styles.errors}>{errors.name}</span>}



              </div>

              <div className={Styles.life}>

                <h3 className={Styles.white}>Años de vida</h3>

                <label className={Styles.white}>Minimo</label>

                <input onChange={handleChange} type="text" name='life_span_min' value={inputs.life_span_min} />

                {errors.life_span_min && <span className={Styles.errors}>{errors.life_span_min}</span>}

                <label className={Styles.white}>Maxima</label>

                <input onChange={handleChange} type="text" name='life_span_max' value={inputs.life_span_max} />

                {errors.life_span_max && <span className={Styles.errors}>{errors.life_span_max}</span>}

              </div>

              <div className={Styles.weight}>

                <h3 className={Styles.white}>Peso</h3>

                <label className={Styles.white}>Minimo</label>

                <input onChange={handleChange} type="text" name='weight_min' value={inputs.weight_min} />

                {errors.weight_min && <span className={Styles.errors}>{errors.weight_min}</span>}

                <label className={Styles.white}>Maxima</label>

                <input onChange={handleChange} type="text" name='weight_max' value={inputs.weight_max} />

                {errors.weight_max && <span className={Styles.errors}>{errors.weight_max}</span>}

              </div>

              <div className={Styles.height}>

                <h3 className={Styles.white}>Altura</h3>

                <label className={Styles.white}>Minimo</label>

                <input onChange={handleChange} type="text" name='height_min' value={inputs.height_min} />

                {errors.height_min && <span className={Styles.errors}>{errors.height_min}</span>}

                <label className={Styles.white}>Maxima</label>

                <input onChange={handleChange} type="text" name='height_max' value={inputs.height_max} />

                {errors.height_max && <span className={Styles.errors}>{errors.height_max}</span>}

              </div>


              <div className={Styles.tempe}>
                <label className={Styles.white}>Temperamento</label>
                <select className={Styles.tempeSelect} onChange={handleChangeTempe} name="temperament" >
                  {temperamentos?.map((tempe, index) => (
                    <option key={index} value={tempe.name}>
                      {tempe.name}
                    </option>
                  ))}
                </select>
                {inputs.temperament?.map((tempe, index) => (
                  

                    <p key={index} className={Styles.white}>{tempe}</p>
                  
                ))}
                {errors.temperament && <span className={Styles.errors}>{errors.temperament}</span>}

              </div>



              <button className={Styles.hueso} onClick={handleSumit}>Ingresar</button>



            </form>

          </div>
        </div>
      )
                }
      export default Form