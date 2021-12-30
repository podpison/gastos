import { NavLinks } from "../navigation/NavLinks";
import c from "./footer.module.scss";
import logo from "./../../../static/img/logo.png";
import { NavLink } from "react-router-dom";
import { SocialMedia } from "./SocialMedia";

export const Footer: React.FC = () => {
    return <footer className={c.container}>
        <div className={c.about}>
            <NavLinks />
        </div>
        <div className={c.logoContainer}>
            <img alt='logo' className={c.logo} src={logo} />
            <p className={c.logoSign}>сервис здорового питания</p>
        </div>
        <div className={c.contacts}>
            <NavLink className={c.termsOfCooperation} to='termsOfCooperation'>Условия сотрудничества</NavLink>
            <NavLink className={c.FAQ} to='FAQ'>FAQ</NavLink>
            <SocialMedia />
            <a className={c.phone} href='tel: +38 (068) 949 - 49 - 49'>+38 (068) 949 - 49 - 49</a>
        </div>
    </footer>
}