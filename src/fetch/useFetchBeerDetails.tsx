/* eslint-disable camelcase */
import { useEffect, useState } from "react"

export interface BeerDetailsProps {
    name: string;
    description: string;
    first_brewed: string;
    ibu: number;
    abv: number;
    image_url: string;
}

interface UseFetchBeerDetailsProps {
    isLoaded: boolean;
    error: string | null;
    beer: BeerDetailsProps | null;
}

const useFetchBeerDetails = (id: number): UseFetchBeerDetailsProps => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [beer, setBeer] = useState<BeerDetailsProps | null>(null)

    useEffect(() => {
        setIsLoaded(false)
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw Error("There was a problem to fetch data")
                }
                return res.json()
            })
            .then(
                (result: BeerDetailsProps[]) => {
                    setIsLoaded(true)
                    const { name, description, first_brewed, abv, ibu, image_url } = result[0]
                    const beerDetails: BeerDetailsProps = {
                        name,
                        description,
                        first_brewed,
                        abv,
                        ibu,
                        image_url
                    }
                    setBeer(beerDetails)
                }
            ).catch(err => setError(err.message))
    }, [id])

    return {
        isLoaded,
        error,
        beer
    }
}

export default useFetchBeerDetails
