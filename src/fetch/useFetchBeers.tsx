/* eslint-disable camelcase */
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { updateBeersList, BookProps, isFetched } from "../redux/beersSlice"

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
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1)
    const dispatch = useAppDispatch()
    const isPageFetched = useAppSelector(isFetched(page - 1))

    useEffect(() => {
        if (!isPageFetched) {
            fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=3`)
                .then(res => {
                    if (!res.ok) {
                        throw Error("There was a problem to fetch data")
                    }
                    return res.json()
                })
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
                    }
                ).catch(err => setError(err.message))
        }
    }, [dispatch, page, isPageFetched])

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
