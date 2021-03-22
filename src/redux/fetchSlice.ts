/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
export interface BookProps {
    id: string;
    name: string;
    description: string;
    image_url: string;
}
interface FetchState {
    search: string | null,
    page: number
}

const initialState: FetchState = {
    search: null,
    page: 1
}

export const fetchSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        incrementPage: state => {
            state.page += 1
        },
        decrementPage: state => {
            state.page -= 1
        },
        resetPage: state => {
            state.page = 1
        },
        updateSearch: (state, action: PayloadAction<string>) => ({
            page: state.page,
            search: action.payload
        })
    }
})

export const { incrementPage, decrementPage, resetPage, updateSearch } = fetchSlice.actions

export const getPage = (state: RootState): FetchState["page"] => state.fetch.page

export const getSearch = (state: RootState): FetchState["search"] => state.fetch.search

export default fetchSlice.reducer
