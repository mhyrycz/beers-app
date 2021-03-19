
import { FC } from "react"
import { useAppSelector } from "../redux/hooks"
import { selectBeers } from "../redux/beersSlice"
import useFetchBeers from "../fetch/useFetchBeers"

const BeerList: FC = () => {
    const {
        isLoaded,
        page: { value: currentPage, set: setPage }
    } = useFetchBeers()

    const beersList = useAppSelector(selectBeers)

    return (
        <div>
            {isLoaded ? JSON.stringify(beersList.map(bl => bl.map(b => b.name))) : "...Loading"}
            <button type="button" onClick={() => setPage(currentPage + 1)}>
                nextPage
            </button>
        </div>
    )
}

export default BeerList
