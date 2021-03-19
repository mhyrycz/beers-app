import { configureStore } from "@reduxjs/toolkit"
import beers from "./beersSlice"

export const store = configureStore({
    reducer: {
        beers
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
