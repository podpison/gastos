import { AppBar } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router";
import { ComputerNav } from "./ComputerNav";
import { MobileNav } from "./MobileNav";
import c from './navigation.module.scss';

export const Navigation: React.FC = () => {
    const phoneNumber = '77 (777) 7 77 - 77 - 77';

    let pathname = useLocation().pathname;
    let circleClass = pathname.includes('/foodPrograms') || pathname.includes('/aboutUs') || pathname === '/' ? c.bigGreenCircle : c.smallGreenCirle

    const [isOpen, setIsOpen] = useState(false);

    const openBurger = () => setIsOpen(true);
    const closeBurger = () => setIsOpen(false);

    return <AppBar className={c.appBar}>
        <ComputerNav phoneNumber={phoneNumber} openBurger={openBurger} />
        <MobileNav phoneNumber={phoneNumber} closeBurger={closeBurger} openBurger={openBurger} isOpen={isOpen} />
        <div className={c.bigGreenCircleContainer}>
            <div className={circleClass} />
        </div>
    </AppBar>
};