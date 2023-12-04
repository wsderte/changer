import { createSlice } from '@reduxjs/toolkit'

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currentCurrency: {},
    },
    reducers: {
        setCurrentCurrency: (state, action) => {
            // create an object of exchanges for each base
            state.currentCurrency[action.payload.base] = action.payload
        },
    },
})

export const { setCurrentCurrency } = currencySlice.actions
export default currencySlice.reducer