import axios from 'axios';


export const GET_ALL_DOGS = "GET_ALL_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const FILTER_DOGS = "FILTER_DOGS";
export const ORDER_DOGS = "ORDER_DOGS";


export const endpoint = 'http://localhost:3001';


export const filterDogs = (filterBy, payload) => {
    return {
        type: FILTER_DOGS,
        payload: { filterBy, data: payload }
    };
}


export const orderDogs = (orderBy, orderDirection) => {
    return {
        type: ORDER_DOGS,
        payload: { orderBy, orderDirection }
    };
}


export const allDogs = () => {
    return async function (dispatch) {
        try {
            const dogs = await axios.get(`${endpoint}/dogs`);
            dispatch({
                type: GET_ALL_DOGS,
                payload: dogs.data
            });
        } catch (error) {
            console.error(error);
            
        }
    }
}


export const allTempe = () => {
    return async function (dispatch) {
        try {
            const temperaments = await axios.get(`${endpoint}/temperaments`);
            dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperaments.data
            });
        } catch (error) {
            console.error( error);
            
        }
    }
}