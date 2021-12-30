import { Button as MUIButton } from "@mui/material";
import c from "./button.module.scss";

type Props = {
    openModal: (status: true) => void
}

export const Button: React.FC<Props> = ({openModal}) => {
    return (
        <MUIButton onClick={() => openModal(true)} className={c.button}>Оформить заказ</MUIButton>
    )
}