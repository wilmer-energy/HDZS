import { createSlice } from '@reduxjs/toolkit';

export const ProductsFilter = createSlice({
    name: 'ProductsFilter',
    initialState: [],
    reducers: {
        updateFilter: function (state,action){
            console.log(action.payload)
            return action.payload
        }
    }
})

export const { updateFilter } = ProductsFilter.actions;

export default ProductsFilter.reducer;
