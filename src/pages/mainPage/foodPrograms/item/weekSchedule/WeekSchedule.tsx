import { NavLink } from "react-router-dom";
import { WeekScheduleType } from "../../../../../redux/staticReducer";
import c from "./../item.module.css";
import { Schedule } from "./Schedule";
import { useLocation } from "react-router";
import { isLinkActiveHelper } from "../../../../../static/helpers/isLinkActiveHelper";

type Props = {
    weekSchedule: WeekScheduleType
    path: string
}

export const WeekSchedule: React.FC<Props> = ({ weekSchedule, path }) => {

    let pathName = useLocation().pathname;
    let currentScheduleNumber = weekSchedule.findIndex(s => s.name === pathName.replace(/\/\w+\/\w+\//g, ''));
    if (currentScheduleNumber === -1) currentScheduleNumber = 0;
    let scheduleInArray = [weekSchedule[currentScheduleNumber]];

    let WeekDays = weekSchedule.map((ws, index) => <NavLink isActive={(match, location) => isLinkActiveHelper(match, location, index === 0, `${path}/${ws.name}`, path)} key={index} activeClassName={c.active} className={c.weekDay} to={`${path}/${ws.name}`}>{ws.name.toUpperCase().slice(0, 3)}</NavLink>)
    let _Schedule = scheduleInArray.map(ws => ws.schedule.map((s, index) => <Schedule key={index} {...s} pathForFirstRender={path} path={`${path}/${ws.name}`} />))

    return <div className={c.weekSchedule}>
        <div className={c.weekDays}>
            {WeekDays}
        </div>
        <div className={c.schedule}>
            {_Schedule}
        </div>
    </div>
};