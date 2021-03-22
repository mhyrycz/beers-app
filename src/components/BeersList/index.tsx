
import { FC } from "react"
import { useAppSelector } from "../../redux/hooks"
import { selectBeersByPage } from "../../redux/beersSlice"
import { getPage } from "../../redux/fetchSlice"
import useFetchBeers from "../../fetch/useFetchBeers"
import { BeersList } from "./styles"
import Pagination from "../Pagination"
import BeerElement from "./BeerElement"
import Search from "../BeerSearch"

const BeerList: FC = () => {
    const {
        isLoaded,
        error
    } = useFetchBeers()

    const page = useAppSelector(getPage)

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

    const beersList = useAppSelector(selectBeersByPage(page - 1))

    return (
        <div>
            <Search />
            {displayList()}
            <Pagination />
        </div>
    )
}

export default BeerList
