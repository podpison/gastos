import { NavLinks } from "../navigation/NavLinks";
import c from "./footer.module.scss";
import logo from "./../../../static/img/logo.png";
import { SocialMedia } from "./SocialMedia";
import { Alert } from "./modals/alert/Alert";
import { useSelector } from "react-redux";
import { getModalsShowStatusSelector, getNameAndPhoneSelector } from "./../../../redux/selectors";
import { PhoneOrderModal } from "./modals/PhoneOrderModal";
import { OnlineOrderModal } from "./modals/OnlineOrderModal";
import { useModalStatusChanger } from "../../../static/helpers/useModalStatusChanger";
import { useState } from "react";

export const Footer: React.FC = () => {
    const [isOrderedSuccessfully, setIsOrderedSuccessfully] = useState(false);
    let modalsShowStatus = useSelector(getModalsShowStatusSelector);
    const changeModalStatus = useModalStatusChanger();
    let nameAndPhone = useSelector(getNameAndPhoneSelector);

    //modals are here because this component is alway available and can render modals
    return <footer className={c.container}>
        {modalsShowStatus.isPhoneModalShown && <PhoneOrderModal setIsOrderedSuccessfully={setIsOrderedSuccessfully} name={nameAndPhone.name} phone={nameAndPhone.phone} closeModal={() => changeModalStatus('phoneModal', false)} isOpen={modalsShowStatus.isPhoneModalShown} />}
        {modalsShowStatus.isOnlineOrderModalShown && <OnlineOrderModal setIsOrderedSuccessfully={setIsOrderedSuccessfully} name={nameAndPhone.name} phone={nameAndPhone.phone} closeModal={() => changeModalStatus('onlineModal', false)} isOpen={modalsShowStatus.isOnlineOrderModalShown} />}
        {isOrderedSuccessfully && <Alert closeAlert={() => setIsOrderedSuccessfully(false)} isOrderedSuccessfully={isOrderedSuccessfully} />}
        <div className={c.about}>
            <NavLinks />
        </div>
        <div className={c.logoContainer}>
            <img alt='logo' className={c.logo} src={logo} />
            <p className={c.logoSign}>сервис здорового питания</p>
        </div>
        <div className={c.contacts}>
            <SocialMedia />
            <a className={c.phone} href='tel: 77 (777) 7 77 - 77 - 77'>77 (777) 7 77 - 77 - 77</a>
        </div>
    </footer>
}