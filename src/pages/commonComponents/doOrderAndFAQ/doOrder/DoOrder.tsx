import { Button } from "@mui/material";
import c from "./doOrder.module.scss";
import { TextField } from "./TextField";
import { useModalStatusChanger } from "../../../../static/helpers/useModalStatusChanger";

export const DoOrder: React.FC = () => {
    const changeModalStatus = useModalStatusChanger();

    return <div className={c.mainContainer}>
        <div className={c.doOrderContainer}>
            <h2 className={c.doOrder}>Оформить заказ</h2>
            <p>Обсудите все детали заказа по телефону или сами укажите все подробности онлайн</p>
        </div>
        <div className={c.textfieldsContainer}>
            <TextField id='doOrderName' helperText='Имя' type='name' />
            <TextField id='doOrderPhone' helperText='Телефон' type='phone' />
        </div>
        <div className={c.buttonsContainer}>
            <Button onClick={() => changeModalStatus('phoneModal', true)} className={c.button} variant='outlined'>Заказ по телефону</Button>
            <p className={c.or}>ИЛИ</p>
            <Button onClick={() => changeModalStatus('onlineModal', true)} className={c.button} variant='outlined'>Онлайн заказ</Button>
        </div>
    </div>
};