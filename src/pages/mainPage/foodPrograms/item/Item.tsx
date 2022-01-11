import { WeekSchedule } from "./weekSchedule/WeekSchedule";
import c from "./item.module.css";
import { Sidebar } from "./sidebar/Sidebar";
import { Route } from "react-router";
import { FoodProgram } from "../../../../redux/staticReducer";

type Props = FoodProgram

export let Item: React.FC<Props> = ({ name, weight, price, description, orderInfo, weekSchedule }) => {

    let path = `/foodPrograms/${name.toLowerCase().replace(/\s+/g, '')}`;
    return <>
        <Route exact path={['/', '/foodPrograms']} render={() => {
            return <div className={c.mainContainer}>
                <Sidebar price={price} name={name} weigth={weight} description={description} orderInfo={orderInfo} />
                <WeekSchedule path={path} weekSchedule={weekSchedule} />
            </div>
        }} />
        <Route path={path} render={() => {
            return <div className={c.mainContainer}>
                <Sidebar price={price} name={name} weigth={weight} description={description} orderInfo={orderInfo} />
                <WeekSchedule path={path} weekSchedule={weekSchedule} />
            </div>
        }} />
    </>
};