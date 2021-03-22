
import { FC } from "react"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { selectBeersByPage } from "../../redux/beersSlice"
import { getPage, getSearch, updateSearch } from "../../redux/fetchSlice"
import useFetchBeers from "../../fetch/useFetchBeers"
import { BeersList } from "./styles"
import Pagination from "../Pagination"
import BeerElement from "./BeerElement"

const BeerList: FC = () => {
    const {
        isLoaded,
        error
    } = useFetchBeers()

    const dispatch = useAppDispatch()

    const page = useAppSelector(getPage)
    const search = useAppSelector(getSearch)

    const displayList = () => {
        if (error) {
            return error
        }
        return isLoaded
            ? <BeersList>
                {beersList.length ? beersList.map(beer => <BeerElement key={beer.id} {...beer} />) : "NotFound"}
            </BeersList>
            : "...Loading"
    }

    const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(updateSearch(e.target.value))
    }

    const beersList = useAppSelector(selectBeersByPage(page - 1))

    const SearchInput = () => (
        <label>
            Search:
            <input
                type="text"
                placeholder="Gimme the BEER!"
                onChange={setSearch}
                value={search ?? ""}
                autoFocus
            />
        </label>
    )

    return (
        <div>
            <SearchInput />
            {displayList()}
            <Pagination />
        </div>
    )
}

export default BeerList
