import { FC } from "react"
import { PaginationWrapper, Page, Arrow } from "./styles"
import { selectBeersByPage } from "../../redux/beersSlice"
import { incrementPage, decrementPage, getPage } from "../../redux/fetchSlice"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"

const RIGHT = String.fromCharCode(8680)
const LEFT = String.fromCharCode(8678)

const Pagination: FC = () => {
    const currentPage = useAppSelector(getPage)
    const dispatch = useAppDispatch()
    const slide = currentPage > 10 ? currentPage - 10 : 0
    const pages = Array.from({ length: 10 }, (_, i) => i + 1 + slide)
    const isIncrementAllowed = useAppSelector(selectBeersByPage(currentPage - 1)).length === 3

    const goPreviousPage = () => {
        if (currentPage > 1) {
            dispatch(decrementPage())
        }
    }

    const goNextPage = () => {
        if (isIncrementAllowed) {
            dispatch(incrementPage())
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
