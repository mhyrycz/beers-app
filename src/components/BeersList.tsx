
import { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import { selectBeersByPage } from "../redux/beersSlice"
import useFetchBeers from "../fetch/useFetchBeers"

const BeerList: FC = () => {
    const {
        isLoaded,
        page: { value: currentPage, set: setPage }
    } = useFetchBeers()

    const beersList = useAppSelector(selectBeersByPage(currentPage - 1))

    return (
        <div>
            {isLoaded ? JSON.stringify(beersList.map(b => b.name)) : "...Loading"}
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
