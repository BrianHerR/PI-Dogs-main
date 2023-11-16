export const GET_ALL_DOGS = "GET_ALL_DOGS";
// eslint-disable-next-line
export const TEMPERAMENTS = "TEMPERAMENTS";
// eslint-disable-next-line
export const ORIGIN = "ORIGIN";
// eslint-disable-next-line
export const ORDER_BY_NAME = "ORDER_BY_NAME";
// eslint-disable-next-line
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
// eslint-disable-next-line 
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";

export const endpoint = 'http://localhost:3001'




export const filterDogs = (filterby, payload) => {
    
        return {
            type: filterby,
            payload: payload
        }
  
}

export const orderDogs = (orderBy, orderDirection) => {
    return {
        type: orderBy,
        payload: orderDirection
    };
}

export const allDogs = () => {
    return async function (dispatch) {
        try {
            const dogs = await axios.get(`${endpoint}/dogs`);
            dispatch({
                type: GET_ALL_DOGS,
                payload: dogs.data
            })
        } catch (error) {
            
            console.error(error);
        }
    }
}

export const allTempe = () => {
    return async function (dispatch) {
        try {
            const temperaments = await axios.get(`${endpoint}/temperaments}`);
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperaments.data
            })
        } catch (error) {
           
            console.error(error);
        }
    }
}
    