import { Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import c from "./modals.module.scss";
import { useEffect, useState } from "react";
import doOrderCss from "./../../doOrderAndFAQ/doOrder/doOrder.module.scss";
import { TextField } from "../../doOrderAndFAQ/doOrder/TextField";
import { useDispatch } from "react-redux";
import { staticActions } from "../../../../redux/staticReducer";

type Props = {
    setIsOrderedSuccessfully: (status: boolean) => void
    name: string
    phone: string
    closeModal: () => void
    isOpen: boolean
}

const id = 'phoneOrderModal';

export const PhoneOrderModal: React.FC<Props> = ({ setIsOrderedSuccessfully, name, phone, closeModal, isOpen }) => {
    const dispatch = useDispatch();
    const [isDisabled, setIsDisabled] = useState(true);
    const closeModalHandler = () => {
        if (!isDisabled) {
            const obj = { name, phone, type: 'phone order' }
            console.log(obj); //send user information to somewhere it needs
            setIsOrderedSuccessfully(true);
            closeModal();
            dispatch(staticActions.setNameOrPhone('name', ''));
            dispatch(staticActions.setNameOrPhone('phone', ''));
        }
    };

    useEffect(() => {
        setTimeout(() => {
            let mainContainerQuery = document.getElementById(id);
            if (mainContainerQuery) {
                if (mainContainerQuery.getElementsByClassName(doOrderCss.badStatus).length !== 0 || mainContainerQuery.getElementsByClassName(doOrderCss.noneStatus).length !== 0) {
                    setIsDisabled(true);
                } else setIsDisabled(false);
            }
        }, 300);
    }, [])

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
            <CloseIcon onClick={closeModal} className={c.modalClose} />
            <div id={id}>
                <TextField rerender={setRerender} id='phoneOrderModalName' helperText='Имя' type='name' />
                <TextField rerender={setRerender} id='phoneOrderModalPhone' helperText='Телефон' type='phone' />
            </div>
            <Button disabled={isDisabled} onClick={closeModalHandler} className={c.button} variant='outlined'>Заказать</Button>
        </div>
    </Modal>
};