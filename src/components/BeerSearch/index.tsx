import { FC } from "react"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { getSearch, updateSearch } from "../../redux/fetchSlice"
import { Input } from "./styles"

const SearchInput: FC = () => {
    const search = useAppSelector(getSearch)
    const dispatch = useAppDispatch()

    const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(updateSearch(e.target.value))
    }

    return (
        <Input
            type="text"
            placeholder="Gimme the BEER!"
            onChange={setSearch}
            value={search ?? ""}
            autoFocus
        />
    )
}

export default SearchInput
