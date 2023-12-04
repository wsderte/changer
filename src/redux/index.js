import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './currency/reducer'

export const store = configureStore({
    reducer: {
        currency: currencyReducer,
    },
})