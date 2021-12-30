import c from './navigation.module.scss';
import phone from './../../../static/img/phone.png';
import burger from './../../../static/img/burger.png';
import logo from './../../../static/img/logo.png';
import { Hidden, Toolbar } from '@mui/material';
import { NavLinks } from './NavLinks';

type Props = {
    openBurger: () => void
    phoneNumber: string
}

export const ComputerNav: React.FC<Props> = ({ openBurger, phoneNumber}) => {
    return <Toolbar>
        <div className={c.mainContainer}>   
            <div className={c.logoContainer}>
                <img alt='logo' className={c.logo} src={logo} />
                <div className={c.logoSign}>healthy ration</div>
            </div>
            <Hidden smDown>
                <div className={c.navContainer}>
                    <div className={c.navLinksContainer}>
                        <NavLinks />
                    </div>
                    <div className={c.number}>
                        <a href={`tel: ${phoneNumber}`}>{phoneNumber}</a>
                    </div>
                </div>
            </Hidden>
            <Hidden smUp>
                <div className={c.navWithBurger}>
                    <a className={c.call} href={`tel: ${phoneNumber}`}>
                        <img src={phone} alt='phone' />
                    </a>
                    <div className={c.burger} onClick={openBurger}>
                        <img src={burger} alt='burger' />
                    </div>
                </div>
            </Hidden>
        </div>
        </Toolbar>
}