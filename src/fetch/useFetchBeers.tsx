/* eslint-disable camelcase */
import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { updateBeersList, BookProps, isFetched, eraseBeersList } from "../redux/beersSlice"

export interface PageProps {
    value: number;
    set: Dispatch<SetStateAction<number>>,
}

interface SearchProps {
    value: string | null;
    set: Dispatch<SetStateAction<string | null>>;
}

interface UseFetchBeersProps {
    isLoaded: boolean;
    page: PageProps;
    error: string | null;
    search: SearchProps
}

const useFetchBeers = (): UseFetchBeersProps => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const isPageFetched = useAppSelector(isFetched(page))

    useEffect(() => {
        if (search) {
            const timer = setTimeout(() => {
                setPage(1)
                dispatch(eraseBeersList())
            }, 1000)
            return () => clearTimeout(timer)
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
        page: {
            value: page,
            set: setPage
        },
        error,
        search: {
            value: search,
            set: setSearch
        }
    }
}

export default useFetchBeers
