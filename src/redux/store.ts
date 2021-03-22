import { configureStore } from "@reduxjs/toolkit"
import beers from "./beersSlice"
import fetch from "./fetchSlice"

export const store = configureStore({
    reducer: {
        beers,
        fetch
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
