import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

// Define a type for the slice state
interface BeersState {
    list: string[]
}

// Define the initial state using that type
const initialState: BeersState = {
    list: []
}

export const beersSlice = createSlice({
    name: "beers",
    initialState,
    reducers: {
        updateBeersList: (state, action: PayloadAction<string[]>) => ({
            list: state.list.concat(action.payload)
        })
    }
})

export const { updateBeersList } = beersSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBeers = (state: RootState): BeersState["list"] => state.beers.list

export default beersSlice.reducer
