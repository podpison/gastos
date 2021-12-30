import { Button, Modal } from "@mui/material";
import { Checkbox } from "../Checkbox";
import { TextField } from "../TextField";
import CloseIcon from "@mui/icons-material/Close";
import c from "./modals.module.scss";
import { useEffect, useState } from "react";
import doOrderCss from "./../doOrder.module.scss";

type Props = {
    name: string
    phone: string
    closeModal: () => void
    isOpen: boolean
}

const id = 'phoneOrderModal';

export const PhoneOrderModal: React.FC<Props> = ({ name, phone, closeModal, isOpen }) => {
    const [currentName, setCurrentName] = useState(name);
    const [currentPhone, setCurrentPhone] = useState(phone);

    const [isDisabled, setIsDisabled] = useState(true);
    const closeModalHandler = () => {
        if (!isDisabled) {
            const obj = {
                name: currentName,
                phone: currentPhone,
                type: 'phone order'
            }
            console.log(obj); //send user information to somewhere it needs
            closeModal();
        }
    };

    const [rerender, setRerender] = useState('');
    useEffect(() => {
        let mainContainerQuery = document.getElementById(id);
        if (mainContainerQuery) {
            if (mainContainerQuery.getElementsByClassName(doOrderCss.badStatus).length !== 0 || mainContainerQuery.getElementsByClassName(doOrderCss.noneStatus).length !== 0) {
                setIsDisabled(true);
            } else setIsDisabled(false);
        }
    }, [rerender])

    return <Modal className={c.phoneModalContainer} onClose={closeModal} open={isOpen}>
        <div className={c.phoneContainer}>
            <CloseIcon onClick={closeModal} className={c.close} />
            <div id={id}>
                <TextField rerender={setRerender} id='phoneOrderModalName' value={currentName} changeValue={setCurrentName} helperText='Имя' type='name' />
                <TextField rerender={setRerender} id='phoneOrderModalPhone' value={currentPhone} changeValue={setCurrentPhone} helperText='Телефон' type='phone' />
            </div>
            <Checkbox description='Согласен с условиями сотрудничества' />
            <Button disabled={isDisabled} onClick={closeModalHandler} className={c.button} variant='outlined'>Заказать</Button>
        </div>
    </Modal>
};