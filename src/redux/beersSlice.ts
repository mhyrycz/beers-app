/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { RootState } from "./store"
export interface BookProps {
    id: string;
    name: string;
    description: string;
    image_url: string;
}
interface BeersState {
    list: BookProps[][]
}

const initialState: BeersState = {
    list: []
}

export const beersSlice = createSlice({
    name: "beers",
    initialState,
    reducers: {
        updateBeersList: (state, action: PayloadAction<BookProps[]>) => ({
            list: [...state.list, action.payload]
        }),
        eraseBeersList: () => ({
            list: []
        })
    }
})

export const { updateBeersList, eraseBeersList } = beersSlice.actions

export const selectBeers = (state: RootState): BookProps[][] => state.beers.list

export const selectBeersByPage = (id: number) => {
    return createSelector(
        selectBeers,
        list => list[id] ?? []
    )
}

export const isFetched = (id: number) => {
    return createSelector(
        selectBeers,
        list => !!list[id]
    )
}

export default beersSlice.reducer
