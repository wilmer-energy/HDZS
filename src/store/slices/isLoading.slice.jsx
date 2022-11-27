import { createSlice } from '@reduxjs/toolkit';

export const isLoading = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: function(state,action){
            state=action.payload
            return state
        }

    }
})

export const { setIsLoading } = isLoading.actions;

export default isLoading.reducer;
