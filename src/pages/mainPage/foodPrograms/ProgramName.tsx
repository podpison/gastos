import { NavLink } from "react-router-dom";
import { isLinkActiveHelper } from "../../../static/helpers/isLinkActiveHelper";
import c from "./foodPrograms.module.scss";

type Props = {
    name: string
    weight: string
    isFirst: boolean
}

export const ProgramName: React.FC<Props> = ({ name, weight, isFirst}) => {
    let regExpedName = name.toLowerCase().replace(/\s+/g, '');
    let to = `/foodPrograms/${regExpedName}`;

    return <div className={c.programNameContainer}>
        <NavLink isActive={(match, location) => isLinkActiveHelper(match, location, isFirst, to, '', regExpedName)} activeClassName={c.active} className={c.programName} to={to}>{name}</NavLink>
        <p className={c.programWeight}>{weight}</p>
    </div>
};