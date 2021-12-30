import { Route } from "react-router";
import c from "./../item.module.css";

type Props = {
    name: string
    time: string
    food: string
    weight: string
    pathForFirstRender: string
    path: string
};

export let Schedule: React.FC<Props> = ({ name, time, food, weight, pathForFirstRender, path }) => {
    return <>
        <Route exact path={['/', '/foodPrograms', pathForFirstRender]} render={() => {
            return <div className={c.scheduleContainer}>
                <div className={c.scheduleNameAndTime}>
                    <p className={c.scheduleName}>{name}</p>
                    <p className={c.scheduleTime}>{time}</p>
                </div>
                <p className={c.scheduleFood}>- {food}</p>
                <p className={c.scheduleWeight}>{weight}</p>
            </div>
        }} />
        <Route path={path} render={() => {
            return <div className={c.scheduleContainer}>
                <div className={c.scheduleNameAndTime}>
                    <p className={c.scheduleName}>{name}</p>
                    <p className={c.scheduleTime}>{time}</p>
                </div>
                <p className={c.scheduleFood}>- {food}</p>
                <p className={c.scheduleWeight}>{weight}</p>
            </div>
        }} />
    </>
};