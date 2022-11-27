import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';

export const purchases = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: function(state,action){
            return action.payload
        }

    }
})

export const getPurchasesThunk = () => (dispatch) => {
    //dispatch(setIsLoading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",getConfig())
        .then((res) => dispatch(setPurchases(res.data.data.purchases)))
        .finally(() => {/*dispatch(setIsLoading(false)) */});
}

export const { setPurchases } = purchases.actions;

export default purchases.reducer;
