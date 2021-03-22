import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "./store"

type AppDispatchProps = typeof useDispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: AppDispatchProps = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
