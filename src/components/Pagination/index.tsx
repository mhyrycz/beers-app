import { FC } from "react"
import { PaginationWrapper, Page, Arrow } from "./styles"
import { PageProps } from "../../fetch/useFetchBeers"

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

    return (
        <PaginationWrapper>
            <Arrow onClick={() => setPage(currentPage - 1)}>
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
            <Arrow onClick={() => setPage(currentPage + 1)}>
                {RIGHT}
            </Arrow>
        </PaginationWrapper>
    )
}

export default Pagination
