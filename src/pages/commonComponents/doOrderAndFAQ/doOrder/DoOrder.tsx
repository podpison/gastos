import { Button } from "@mui/material";
import c from "./doOrder.module.scss";
import { TextField } from "./TextField";
import { Checkbox } from "./Checkbox";
import { useState } from "react";
import { PhoneOrderModal } from "./modals/PhoneOrderModal";
import { OnlineOrderModal } from "./modals/OnlineOrderModal";

export const DoOrder = () => {
    let [name, setName] = useState('');
    let [phone, setPhone] = useState('');

    let [isPhoneOrderModalOpen, setIsPhoneOrderModalOpen] = useState(false);
    let [isOnlineOrderModalOpen, setIsOnlineOrderModalOpen] = useState(false);
    let closeModal = (callback: (status: boolean) => void) => callback(false);

    return <div className={c.mainContainer}>
        {isPhoneOrderModalOpen && <PhoneOrderModal name={name} phone={phone} closeModal={() => closeModal(setIsPhoneOrderModalOpen)} isOpen={isPhoneOrderModalOpen} />}
        {isOnlineOrderModalOpen && <OnlineOrderModal name={name} phone={phone} closeModal={() => closeModal(setIsOnlineOrderModalOpen)} isOpen={isOnlineOrderModalOpen} />}
        <div className={c.doOrderContainer}>
            <h2 className={c.doOrder}>Оформить заказ</h2>
            <p>Обсудите все детали заказа по телефону или сами укажите все подробности онлайн</p>
        </div>
        <div className={c.textfieldsContainer}>
            <TextField id='doOrderName' value={name} changeValue={setName} helperText='Имя' type='name' />
            <TextField id='doOrderPhone' value={phone} changeValue={setPhone} helperText='Телефон' type='phone' />
        </div>
        <div>
            <Checkbox description='Тест день! Получить скидку -30%' />
            <Checkbox description='Согласен с условиями сотрудничества' />
        </div>
        <div className={c.buttonsContainer}>
            <Button onClick={() => setIsPhoneOrderModalOpen(true)} className={c.button} variant='outlined'>Заказ по телефону</Button>
            <p className={c.or}>ИЛИ</p>
            <Button onClick={() => setIsOnlineOrderModalOpen(true)} className={c.button} variant='outlined'>Онлайн заказ</Button>
        </div>
    </div>
};