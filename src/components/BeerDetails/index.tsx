import { FC } from "react"
import { useParams } from "react-router-dom"
import useFetchBeers, { BeerDetailsProps } from "../../fetch/useFetchBeerDetails"
import BackButton from "../Button"
import {
    Wrapper,
    ImgWrapper,
    Info,
    Name,
    Description,
    Feature,
    Key,
    Value
} from "./styles"

const BeerDetails: FC = () => {
    const { id }: { id: string } = useParams()
    const {
        isLoaded,
        error,
        beer
    } = useFetchBeers(Number(id))

    const Features = (beer: BeerDetailsProps) => {
        return Object.keys(beer).slice(2, 5).map((key) => (
            <Feature key={key}>
                <Key>
                    {key}
                </Key>
                <Value>
                    {(beer as any)[key]}
                </Value>
            </Feature>
        ))
    }

    const Beer = beer && (
        <Wrapper>
            <ImgWrapper>
                <img src={beer.image_url} height={"400px"} />
            </ImgWrapper>
            <Info>
                <Name>{beer.name}</Name>
                <Description>{beer.description}</Description>
                {Features(beer)}
            </Info>
        </Wrapper>
    )

    const displayBeer = () => {
        if (error) {
            return error
        }
        return isLoaded
            ? Beer
            : "...Loading"
    }

    return (
        <div>
            <BackButton
                label="Back to List"
                destination="/"
            />
            {displayBeer()}
        </div>
    )
}

export default BeerDetails
