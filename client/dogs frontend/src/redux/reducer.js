import { GET_ALL_DOGS, GET_TEMPERAMENTS, TEMPERAMENTS, ORDER_BY_NAME, ORDER_BY_WEIGHT, ORIGIN} from './actions_types';
  
  const initialState = {
    dogs: [],
    copyDogs: [],
    temperaments: [],
    filters: [],
    order: [],
    
  };
  
  const dogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_DOGS:

        return {
          ...state,
          dogs: action.payload,
          copyDogs: action.payload
        };
  
      case GET_TEMPERAMENTS:
        return {
          ...state,
          temperaments: action.payload,
        };
  
      case TEMPERAMENTS:
        const filtrados_tempe = dogs.filter((dog) => dog.temperament === action.payload)
      return {
          ...state,
          filters: filtrados_tempe,
        };
      
      case ORIGIN:
        const filtrados_origin = copyDogs.filter((dog) => dog !== action.payload)
        return {
          ...state,
          filters: filtrados_origin,
        };
  
      case ORDER_BY_NAME:
        return {
          ...state,
          orderBy: {
            field: 'name',
            direction: action.payload,
          },
        };
  
      case ORDER_BY_WEIGHT:
        return {
          ...state,
          orderBy: {
            field: 'weight',
            direction: action.payload,
          },
        };
  
      default:
        return state;
    }
  };
  
  export default dogsReducer;