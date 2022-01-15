import c from './navigation.module.scss';
import { NavLink } from "react-router-dom";
import { isLinkActiveHelper } from '../../../static/helpers/isLinkActiveHelper';

type Props = {
    closeBurger?: () => void
}

export const NavLinks: React.FC<Props> = ({closeBurger}) => {
    return <div className={c.linksContainer}>
        <NavLink isActive={(match, location) => isLinkActiveHelper(match, location, true, '/foodPrograms', '', '', true)} onClick={closeBurger} activeClassName={c.active} className={c.link} to='/foodPrograms'>Програмы питания</NavLink>
        <NavLink onClick={closeBurger} activeClassName={c.active} className={c.link} to='/buisnesLanch'>Бизнес-ланчи</NavLink>
        <NavLink onClick={closeBurger} activeClassName={c.active} className={c.link} to='/gastroShop'>Gastro Shop</NavLink>
        <NavLink onClick={closeBurger} activeClassName={c.active} className={c.link} to='/aboutUs'>О нас</NavLink>
        <NavLink onClick={closeBurger} activeClassName={c.active} className={c.link} to='/blog'>Блог</NavLink>
    </div>
}