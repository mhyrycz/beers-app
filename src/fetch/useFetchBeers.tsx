/* eslint-disable camelcase */
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { useAppDispatch } from "../redux/hooks"
import { updateBeersList, BookProps } from "../redux/beersSlice"

interface PageProps {
    value: number;
    set: Dispatch<SetStateAction<number>>,
}

interface UseFetchBeersProps {
    isLoaded: boolean;
    page: PageProps,
    error: string | null
}

const useFetchBeers = (): UseFetchBeersProps => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState(null)
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=3`)
            .then(res => res.json())
            .then(
                (result: BookProps[]) => {
                    setIsLoaded(true)
                    const beersNames: BookProps[] = result.map((r: BookProps) => (
                        {
                            id: r.id,
                            name: r.name,
                            description: r.description,
                            image_url: r.image_url
                        }
                    ))
                    dispatch(updateBeersList(beersNames))
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [dispatch, page])

    return {
        isLoaded,
        page: {
            value: page,
            set: setPage
        },
        error
    }
}

export default useFetchBeers
