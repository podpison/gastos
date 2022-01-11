import { Button as MUIButton } from "@mui/material";
import c from "./button.module.scss";

type Props = {
    openModal: () => void
}

export const Button: React.FC<Props> = ({openModal}) => {
    return (
        <MUIButton onClick={openModal} className={c.button}>Оформить заказ</MUIButton>
    )
}