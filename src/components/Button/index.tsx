import { FC } from "react"
import { useHistory } from "react-router-dom"
import { BeerButton } from "./styles"

interface ButtonProps {
    label: string;
    destination: string;
}

const Button: FC<ButtonProps> = ({ label, destination }: ButtonProps) => {
    const goTo = useHistory().push
    return (
        <BeerButton
            type="button"
            onClick={() => goTo(destination)}
        >
            {label}
        </BeerButton>
    )
}

export default Button
