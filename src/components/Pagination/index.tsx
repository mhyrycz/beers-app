import { FC, useEffect, useRef } from "react"
import { PaginationWrapper, Page, Arrow } from "./styles"
import { selectBeersByPage } from "../../redux/beersSlice"
import {
    incrementPage,
    decrementPage,
    getPage,
    getSlide,
    increaseSlide,
    decreaseSlide,
    resetSlide
} from "../../redux/fetchSlice"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"

const RIGHT = String.fromCharCode(8680)
const LEFT = String.fromCharCode(8678)

const Pagination: FC = () => {
    const currentPage = useAppSelector(getPage)
    const currentSlide = useAppSelector(getSlide)
    const dispatch = useAppDispatch()
    const didMount = useRef(false)
    const pages = Array.from({ length: 10 }, (_, i) => i + 1 + currentSlide)
    const isIncrementAllowed = useAppSelector(selectBeersByPage(currentPage - 1)).length === 3

    const nextSlide = () => {
        if (currentPage % 10 === 0) {
            dispatch(increaseSlide())
        }
    }

    const previousSlide = () => {
        if (currentPage % 10 === 1) {
            dispatch(decreaseSlide())
        }
    }

    useEffect(() => {
        if (didMount.current && currentPage === 1) {
            dispatch(resetSlide())
        } else {
            didMount.current = true
        }
    })

    const goPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(decrementPage())
            previousSlide()
        }
    }

    const goNextPage = () => {
        if (isIncrementAllowed) {
            dispatch(incrementPage())
            nextSlide()
        }
    }

    return (
        <PaginationWrapper>
            <Arrow
                onClick={goPreviousPage}
                disabled={currentPage === 1}
            >
                {LEFT}
            </Arrow>
            {pages.map(page => (
                <Page
                    key={page}
                    active={page === currentPage}
                >
                    {page}
                </Page>
            ))}
            <Arrow
                onClick={goNextPage}
                disabled={!isIncrementAllowed}
            >
                {RIGHT}
            </Arrow>
        </PaginationWrapper>
    )
}

export default Pagination
