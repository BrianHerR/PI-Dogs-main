import { GET_ALL_DOGS, GET_TEMPERAMENTS, ORDER_DOGS, FILTER_DOGS} from './actions_types';
  
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

        if (orderBy === 'alfabetica') {
          ordenados.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            return orderDirection === 'asc' ? (nameA > nameB ? 1 : -1) : (nameA > nameB ? -1 : 1);
          });
        } else if (orderBy === 'Peso') {
          ordenados.sort((a, b) => {
            const weightA = parseInt(a.weight[1]);
            const weightB = parseInt(b.weight[1]);

            return orderDirection === 'asc' ? weightA - weightB : weightB - weightA;
          });
        }

        return {
          ...state,
          dogs: ordenados,
        }

        case FILTER_DOGS:
          const filtrados = [...state.dogs]
          const {filterby, data} = action.payload

        if(filterby === 'temperamento'){
          const coincidencias = filtrados.filter((dog)=>dog.temperament.find((tempe)=>tempe===data))
          filtrados = coincidencias
        }
        if(filterby === 'origen'){
          const coincidencias = filtrados.filter((dog)=>dog.source === data)
          filtrados = coincidencias
        }
        return {
          ...state,
          dogs: filtrados
        }
        
      default:
        return state;
    }
  };
  
  export default dogsReducer;