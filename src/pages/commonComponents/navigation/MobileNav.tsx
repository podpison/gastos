import CloseIcon from '@mui/icons-material/Close';
import { SwipeableDrawer } from '@mui/material';
import { NavLinks } from './NavLinks';
import c from "./navigation.module.scss";

type Props = {
    closeBurger: () => void
    openBurger: () => void
    isOpen: boolean
    phoneNumber: string
}

export const MobileNav: React.FC<Props> = ({ closeBurger, openBurger, isOpen, phoneNumber }) => {
    return <SwipeableDrawer onClose={closeBurger} onOpen={openBurger} anchor='top' open={isOpen}>
        <div className={c.mobileNavContainer}>
            <div className={c.closeButtonContainer}>
                <CloseIcon className={c.closeButton} onClick={closeBurger} />
            </div>
            <div className={c.links}>
                <NavLinks closeBurger={closeBurger} />
            </div>
            <div className={c.phoneNumberContainer}>
                <a href={`tel: ${phoneNumber}`} className={c.phoneNumber}>{phoneNumber}</a>
            </div>
        </div>
    </SwipeableDrawer>
};