import { FC } from "react"
import { useParams } from "react-router-dom"

const BeerDetails: FC = () => {
    const { id }: { id: string } = useParams()
    return (
        <div>
            Beer {id} Details
        </div>
    )
}

export default BeerDetails
