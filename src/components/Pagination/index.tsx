import { FC } from "react"
import { PaginationWrapper, Page, Arrow } from "./styles"
import { PageProps } from "../../fetch/useFetchBeers"
import { selectBeersByPage } from "../../redux/beersSlice"
import { useAppSelector } from "../../redux/hooks"

const RIGHT = String.fromCharCode(8680)
const LEFT = String.fromCharCode(8678)

interface PaginationProps {
    currentPage: number;
    setPage: PageProps["set"];
}

const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
    const { currentPage, setPage } = props
    const slide = currentPage > 10 ? currentPage - 10 : 0
    const pages = Array.from({ length: 10 }, (_, i) => i + 1 + slide)
    console.log(useAppSelector(selectBeersByPage(currentPage - 1)).length)
    const isIncrementAllowed = useAppSelector(selectBeersByPage(currentPage - 1)).length === 3

    const decreasePage = () => {
        if (currentPage > 1) {
            setPage(currentPage - 1)
        }
    }

    const increasePage = () => {
        if (isIncrementAllowed) {
            setPage(currentPage + 1)
        }
    }

    return (
        <PaginationWrapper>
            <Arrow
                onClick={decreasePage}
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
                onClick={increasePage}
                disabled={!isIncrementAllowed}
            >
                {RIGHT}
            </Arrow>
        </PaginationWrapper>
    )
}

export default Pagination
