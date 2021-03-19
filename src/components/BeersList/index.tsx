
import { FC } from "react"
import { useAppSelector } from "../../redux/hooks"
import { selectBeersByPage } from "../../redux/beersSlice"
import useFetchBeers from "../../fetch/useFetchBeers"
import Pagination from "../Pagination"

const BeerList: FC = () => {
    const {
        isLoaded,
        page,
        error,
        search
    } = useFetchBeers()

    const displayList = () => {
        if (error) {
            return error
        }
        return isLoaded ? JSON.stringify(beersList.map(b => b.name)) : "...Loading"
    }

    const updateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        search.set(e.target.value)
    }

    const beersList = useAppSelector(selectBeersByPage(page.value - 1))

    const SearchInput = () => (
        <label>
            Search:
            <input
                type="text"
                placeholder="Gimme the BEER!"
                onChange={updateSearch}
                value={search.value ?? ""}
                autoFocus
            />
        </label>
    )

    return (
        <div>
            <SearchInput />
            {displayList()}
            <Pagination
                currentPage={page.value}
                setPage={page.set}
            />
        </div>
    )
}

export default BeerList
