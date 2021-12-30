import { Button, Modal } from "@mui/material";
import { Checkbox } from "../Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import c from "./modals.module.scss";
import { BadgeTextField } from "./BadgeTextField";
import { FAQ } from "../../FAQ/FAQ";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaticItems } from "../../../../../redux/staticReducer";
import { getFAQSelector, getOnlineOrderModalProduct } from "../../../../../redux/selectors";
import { OrderList } from "./orderList/OrderList";

type Props = {
    name: string
    phone: string
    closeModal: () => void
    isOpen: boolean
}

type UserCredType = {
    [key: string]: string
}

const id = 'onlineOrderModal';

const userCred: UserCredType = { type: 'online order' } //autogenerate

export const OnlineOrderModal: React.FC<Props> = ({ name, phone, closeModal, isOpen }) => {
    const updateUserCred = (credField: string, newValue: string) => {
        userCred[credField] = newValue;
    };

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('FAQ'));
    }, [dispatch]);

    let FAQObject = useSelector(getFAQSelector)
    let OnlineOrderModalProducts = useSelector(getOnlineOrderModalProduct);
    let productsCount = OnlineOrderModalProducts.reduce((sum, prod) => sum + prod.count, 0)
    let productsPrise = OnlineOrderModalProducts.reduce((sum, prod) => sum + prod.price, 0);

    const [isDisabled, setIsDisabled] = useState(true);
    const closeModalHandler = () => {
        if (!isDisabled) {
            console.log(userCred);
            closeModal();
        };
    };

    const [isWarningShown, setIsWarningShown] = useState(false);

    //to do useEffect bellow this component must be rerendered
    const [rerender, setRerender] = useState('');
    useEffect(() => {
        let mainContainerQuery = document.getElementById(id);
        if (mainContainerQuery) {
            if (mainContainerQuery.getElementsByClassName(c.badStatus).length !== 0) {
                setIsWarningShown(true);
                setIsDisabled(true);
            } else if (mainContainerQuery.getElementsByClassName(c.noneStatus).length !== 0) {
                setIsDisabled(true);
            } else {
                setIsWarningShown(false);
                setIsDisabled(false);
            };
        };
    }, [rerender]);

    return <Modal className={c.modal}  onClose={closeModal} open={isOpen}>
        <div className={c.onlineModalContainer}>
            <div className={c.infoAndButton}>
                <div className={c.onlineContainer}>
                    {isWarningShown && <p className={c.gapsWarning}>Fill in all the gaps correctly</p>}
                    <CloseIcon onClick={closeModal} className={c.close} />
                    <div id={id}>
                        <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('name', newValue)} id='badgeName' placeholder='Name' value={name} type='text' className={c.bigTextField} regExpType='name' rerender={setRerender} />
                        <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('phone', newValue)} id='badgePhone' placeholder='Phone number' value={phone} type='text' className={c.bigTextField} regExpType='phone' rerender={setRerender} />
                        <div className={c.textFields}>
                            <div className={c.textFieldsFirstPart}>
                                <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('street', newValue)} id='badgeStreet' placeholder='Street' type='text' className={c.street} regExpType='street' rerender={setRerender} />
                                <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('home', newValue)} id='badgeHome' maxLength={3} type='number' className={c.home} rerender={setRerender} />
                                <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('floor', newValue)} id='badgeFloor' maxLength={2} type='number' className={c.floor} rerender={setRerender} />
                            </div>
                            <div className={c.textFieldsSecondPart}>
                                <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('apartment', newValue)} id='badgeApartment' maxLength={3} type='number' className={c.apartment} rerender={setRerender} />
                                <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('frontDoor', newValue)} id='badgeFrontDoor' maxLength={3} type='number' className={c.frontDoor} rerender={setRerender} />
                                <BadgeTextField updateUserCred={(newValue: string) => updateUserCred('intercom', newValue)} id='badgeIntercom' maxLength={3} type='number' className={c.intercom} rerender={setRerender} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={c.orderInformationAndButtonAndCheckboxContainer}>
                    <div className={c.checkboxContainer}>
                        <Checkbox description='Согласен с условиями сотрудничества' />
                    </div>
                    <div className={c.orderInformationAndButtonContainer}>
                        <div className={c.orderInformationAndButton}>
                            <Button disabled={isDisabled} onClick={closeModalHandler} className={c.button} variant='outlined'>Заказать</Button>
                            {productsCount !== 0 && <div className={c.countAndPrice}>{`${productsCount} шт / ${productsPrise} грн`}</div>}
                        </div>
                        {OnlineOrderModalProducts.length !== 0 && <OrderList items={OnlineOrderModalProducts} />}
                    </div>
                </div>
            </div>
            <div className={c.FAQ}>
                {FAQObject !== undefined && FAQObject.length !== 0 ? <FAQ updateUserCred={updateUserCred} items={FAQObject[0].onlineOrderModalFAQ} /> : []}
            </div>
            {/* it's quite weird isn't it? lol */}
            <div className={c.orderInformationAndButtonAndCheckboxContainerMobile}>
                    <div className={c.checkboxContainer}>
                        <Checkbox description='Согласен с условиями сотрудничества' />
                    </div>
                    <div className={c.orderInformationAndButtonContainer}>
                        <div className={c.orderInformationAndButton}>
                            <Button disabled={isDisabled} onClick={closeModalHandler} className={c.button} variant='outlined'>Заказать</Button>
                            {productsCount !== 0 && <div className={c.countAndPrice}>{`${productsCount} шт / ${productsPrise} грн`}</div>}
                        </div>
                        {OnlineOrderModalProducts.length !== 0 && <OrderList items={OnlineOrderModalProducts} />}
                    </div>
            </div>
        </div>
    </Modal>
};