/* eslint-disable camelcase */
import { FC } from "react"
import { useHistory } from "react-router-dom"
import { Wrapper, ImgWrapper, Shorthand, Name, Arrow } from "./styles"

const ARROW = String.fromCharCode(10148)

interface BeerElementProps {
    id: string
    image_url: string;
    name: string;
    description: string;
}

const BeerElement: FC<BeerElementProps> = ({
    id, image_url, name, description
}: BeerElementProps) => {
    const goToBeer = useHistory().push
    return (
        <Wrapper>
            <ImgWrapper>
                <img src={image_url} height={"150px"} />
            </ImgWrapper>
            <Shorthand>
                <Name>{name}</Name>
                <div>{`${description.substr(0, 100)}...`}</div>
            </Shorthand>
            <Arrow
                onClick={() => goToBeer(`/${id}`)}
            >
                {ARROW}
            </Arrow>
        </Wrapper>
    )
}

export default BeerElement
