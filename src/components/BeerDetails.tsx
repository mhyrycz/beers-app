import { FC } from "react"
import { useHistory, useParams } from "react-router-dom"

const BeerDetails: FC = () => {
    const goToList = useHistory().push
    const { id }: { id: string } = useParams()
    return (
        <div>
            Beer {id} Details
            <button
                type={"button"}
                onClick={() => goToList("/")}
            >
                back
            </button>
        </div>
    )
}

export default BeerDetails
