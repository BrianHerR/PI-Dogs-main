import { GET_ALL_DOGS, GET_TEMPERAMENTS, ORDER_DOGS, FILTER_DOGS, SEARCH_NAME, POST} from './actions_types';
  
  const initialState = {
    dogs: [],
    copyDogs: [],
    temperaments: [],
    
    
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
  
      case ORDER_DOGS:
         
        const ordenados = [...state.dogs]
        const { orderBy, orderDirection } = action.payload;

        if (orderBy === 'A-Z') {
          ordenados.sort((a, b) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()

            return orderDirection === 'asc' ? (nameA > nameB ? 1 : -1) : (nameA > nameB ? -1 : 1);
          });
        } else if (orderBy === 'Peso') {
          ordenados.sort((a, b) => {
            
            const weightA = parseInt(a.weight_min)
            const weightB = parseInt(b.weight_min)
            
            return orderDirection === 'asc' ? weightA - weightB : weightB - weightA;
          });
        }

        return {
          ...state,
          dogs: ordenados,
        }

        case FILTER_DOGS:
          let filtrados = [...state.copyDogs]
          const {filterBy, data} = action.payload
          
          console.log(data)
          if (filterBy === 'temperamento') {
            const coincidencias = filtrados.filter((dog) => {
                return dog.temperament.map((temp) => temp).includes(data);
            });
            filtrados = coincidencias;
            
        }
        if(filterBy === 'origen'){
          const coincidencias = filtrados.filter((dog)=>dog.source === data)
          filtrados = coincidencias
        }
        return {
          ...state,
          dogs: filtrados
          
        }
        case SEARCH_NAME:
          return {
            ...state,
            dogs: action.payload
          }
        
        
      default:
        return state;
    }
  };
  
  export default dogsReducer;