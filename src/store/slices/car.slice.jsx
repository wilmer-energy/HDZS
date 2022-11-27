import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import getConfig from '/src/utils/getConfig';

export const cart = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
        setCar:function(state,action){
            return action.payload
        }

    }
})
export const getCartThunk = () => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
        .then((res) => dispatch(setCar(res.data.data.cart.products)))
        .finally(() => {/*dispatch(setIsLoading(false)) */});
}

export const addCartThunk = (obj) => (dispatch) => {
    
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart",obj,getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch((error)=>{console.log(error)})
        .finally(() => {})
}

export const updateCartThunk = (item) => (dispatch) => {
    
    return axios.patch("https://ecommerce-api-react.herokuapp.com/api/v1/cart",item,getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => {})
}

export const deleteCartThunk = (id) => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.delete(`https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,getConfig())
        .then(() => dispatch(getCartThunk()))
        .finally(() => {/*dispatch(setIsLoading(false))*/});
}

export const checkoutThunk = () => (dispatch) => {

    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",{street: "Green St. 1456",colony: "Southwest",zipCode: 12345,city: "USA",references: "Some references"},getConfig())
        .then(() =>{ 
            return dispatch(setCar([]))})
        .finally(() => {dispatch(setIsLoading(false))});//dispatch(setIsLoading(false))
}

export const { setCar } = cart.actions;

export default cart.reducer;
