/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable camelcase */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
interface FetchState {
    search: string | null,
    page: number,
    slide: number
}

const initialState: FetchState = {
    search: null,
    page: 1,
    slide: 0
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
            ...state,
            search: action.payload
        }),
        increaseSlide: state => {
            state.slide += 10
        },
        decreaseSlide: state => {
            state.slide -= 10
        },
        resetSlide: state => {
            state.slide = 0
        }
    }
})

export const {
    incrementPage,
    decrementPage,
    resetPage,
    updateSearch,
    increaseSlide,
    decreaseSlide,
    resetSlide
} = fetchSlice.actions

export const getPage = (state: RootState): FetchState["page"] => state.fetch.page

export const getSearch = (state: RootState): FetchState["search"] => state.fetch.search

export const getSlide = (state: RootState): FetchState["slide"] => state.fetch.slide

export default fetchSlice.reducer
