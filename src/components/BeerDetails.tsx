import { useParams } from "react-router-dom";

const BeerDetails = () => {
    const { id }: any = useParams();
    return (
        <div>
            Beer {id} Details
        </div>
    )
}

export default BeerDetails