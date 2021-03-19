
import { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import { selectBeersByPage } from "../redux/beersSlice"
import useFetchBeers from "../fetch/useFetchBeers"

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
            <button
                type="button"
                onClick={() => page.set(page.value - 1)}
                disabled={page.value === 1}
            >
                previous
            </button>
            <button
                type="button"
                onClick={() => page.set(page.value + 1)}
            >
                nextPage
            </button>
        </div>
    )
}

export default BeerList
