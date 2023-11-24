const isNumber = /^\d+$/
const isString = /^[A-Za-z]+$/;

const validate = (inputs) => {
  const errors = {};
    
  //Validacion de name
    if (!inputs.name) {
        errors.name = 'Este campo es obligatorio completar'
    }

    else if (!isString.test(inputs.name)) {
        errors.name = 'No se permiten numeros, ni caracteres especiales'
    }
    else if (inputs.name.length > 40) {
        errors.name = 'Maximo 40 caracteres'
    }
    else{
        errors.name = ''
    }
    //Validacion de Peso
    if(!inputs.weight_max){
        errors.weight_max = 'Este campo es obligatorio completar'
    }else if(inputs.weight_max.length > 2){
        errors.weight_max = 'Solo se permiten 2 digitos'
    }else if(!isNumber.test(inputs.weight_max)){
        errors.weight_max = 'Solo son permitidos numeros en este campo'
    }else{
        errors.weight_max = ''
    }
    if(!inputs.weight_min){
        errors.weight_min = 'Este campo es obligatorio completar'
    }else if(inputs.weight_min.length > 2){
        errors.weight_min = 'Solo se permiten 2 digitos'
    }else if(!isNumber.test(inputs.weight_min)){
        errors.weight_min = 'Solo son permitidos numeros en este campo'
    }else{
        errors.weight_min = ''
    }
    if(inputs.weight_min > inputs.weight_max){
        errors.weight_max = 'El valor minimo no puede ser mayor al maximo'
        errors.weight_min = 'El valor minimo no puede ser mayor al maximo'
    }
    //Validacion de Altura
    if(!inputs.height_max){
        errors.height_max = 'Este campo es obligatorio completar'
    }else if(inputs.height_max.length > 2){
        errors.height_max = 'Solo se permiten 2 digitos'
    }else if(!isNumber.test(inputs.height_max)){
        errors.height_max = 'Solo son permitidos numeros en este campo'
    }


    if(!inputs.height_min){
        errors.height_min = 'Este campo es obligatorio completar'
    }else if(inputs.height_min.length > 2){
        errors.height_min = 'Solo se permiten 2 digitos'
    }else if(!isNumber.test(inputs.height_min)){
        errors.height_min = 'Solo son permitidos numeros en este campo'
    }
    if(inputs.height_min > inputs.height_max){
        errors.height_max = 'El valor minimo no puede ser mayor al maximo'
        errors.height_min = 'El valor minimo no puede ser mayor al maximo'
    }
    //Validacion de Años de vida
    if(!inputs.life_span_max){
        errors.life_span_max = 'Este campo es obligatorio completar'
    }else if(inputs.life_span_max.length > 2){
        errors.life_span_max = 'Solo se permiten 2 digitos'
    }else if(!isNumber.test(inputs.life_span_max)){
        errors.life_span_max = 'Solo son permitidos numeros en este campo'
    }

    if(!inputs.life_span_min){
        errors.life_span_min = 'Este campo es obligatorio completar'
    }else if(inputs.life_span_min.length > 2){
        errors.life_span_min = 'Solo se permiten 2 digitos'
    }else if(!isNumber.test(inputs.life_span_min)){
        errors.life_span_min = 'Solo son permitidos numeros en este campo'
    }
    if(inputs.life_span_min > inputs.life_span_max){
        errors.life_span_max = 'El valor minimo no puede ser mayor al maximo'
        errors.life_span_min = 'El valor minimo no puede ser mayor al maximo'
    }
  
  
  
  return errors;
  }
  
  export default validate;