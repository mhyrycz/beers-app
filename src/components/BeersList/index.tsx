
import { FC } from "react"
import { useAppSelector } from "../../redux/hooks"
import { selectBeersByPage } from "../../redux/beersSlice"
import { getPage } from "../../redux/fetchSlice"
import useFetchBeers from "../../fetch/useFetchBeers"
import { BeersList, Header, Wrapper, Message } from "./styles"
import Pagination from "../Pagination"
import BeerElement from "./BeerElement"
import Search from "../BeerSearch"
import RandomBeerButton from "../Button"

const BeerList: FC = () => {
    const {
        isLoaded,
        error
    } = useFetchBeers()

    const page = useAppSelector(getPage)

    const displayList = () => {
        if (error) {
            return <Message>{error}</Message>
        }
        return isLoaded
            ? beersList.length
                ? beersList.map(beer => <BeerElement key={beer.id} {...beer} />)
                : <Message>Not Found</Message>
            : <Message>...Loading</Message>
    }

    const getRandomBeerAdress = () => {
        const randomId = Math.floor(Math.random() * 50) + 1
        return `/${randomId}`
    }

    const beersList = useAppSelector(selectBeersByPage(page - 1))

    return (
        <Wrapper>
            <Header>
                <Search />
                <RandomBeerButton
                    label="Random"
                    destination={getRandomBeerAdress()}
                />
            </Header>
            <BeersList>
                {displayList()}
            </BeersList>
            <Pagination />
        </Wrapper>
    )
}

export default BeerList
