
import { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import { selectBeersByPage } from "../redux/beersSlice"
import useFetchBeers from "../fetch/useFetchBeers"

const BeerList: FC = () => {
    const {
        isLoaded,
        page: { value: currentPage, set: setPage },
        error
    } = useFetchBeers()

    const displayList = () => {
        if (error) {
            return error
        }
        return isLoaded ? JSON.stringify(beersList.map(b => b.name)) : "...Loading"
    }

    const beersList = useAppSelector(selectBeersByPage(currentPage - 1))

    return (
        <div>
            {displayList()}
            <button
                type="button"
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                previous
            </button>
            <button
                type="button"
                onClick={() => setPage(currentPage + 1)}
            >
                nextPage
            </button>
        </div>
    )
}

export default BeerList
