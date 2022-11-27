import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateFilter } from './ProducsFilter.slice';

export const products = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        update: function(state,action){
            return action.payload
        }

    }
})

export const getProductsThunk = () => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then((res) => {dispatch(update(res.data.data.products))
        dispatch(updateFilter(res.data.data.products))})
        //.finally(() => dispatch(setIsLoading(false)));
}

export const { update } = products.actions;

export default products.reducer;
