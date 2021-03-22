/* eslint-disable camelcase */
import { useEffect, useState, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { updateBeersList, BookProps, isFetched, eraseBeersList } from "../redux/beersSlice"
import { getPage, resetPage, getSearch } from "../redux/fetchSlice"
interface UseFetchBeersProps {
    isLoaded: boolean;
    error: string | null;
}

const useFetchBeers = (): UseFetchBeersProps => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const page = useAppSelector(getPage)
    const search = useAppSelector(getSearch)
    const isPageFetched = useAppSelector(isFetched(page))
    const didMount = useRef(false)

    useEffect(() => {
        if (didMount.current && typeof search === "string") {
            const timer = setTimeout(() => {
                dispatch(resetPage())
                dispatch(eraseBeersList())
            }, 1000)
            return () => clearTimeout(timer)
        } else {
            didMount.current = true
        }
    }, [search, dispatch])

    useEffect(() => {
        if (!isPageFetched) {
            setIsLoaded(false)
            fetch(`https://api.punkapi.com/v2/beers?${search ? `beer_name=${search}&` : ""}page=${page}&per_page=3`)
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
    }, [search, dispatch, page, isPageFetched])

    return {
        isLoaded,
        error
    }
}

export default useFetchBeers
