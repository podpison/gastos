import { Item } from "./item/Item";
import c from './foodPrograms.module.scss';
import { ProgramName } from "./ProgramName";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodProgramsSelector } from "../../../redux/selectors";
import { getStaticItems } from "../../../redux/staticReducer";
import { useLocation } from "react-router";

export let FoodPrograms = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('foodPrograms'));
    }, [dispatch]);

    let foodPrograms = useSelector(getFoodProgramsSelector);
    let programNames = foodPrograms.map((p, index) => <ProgramName isFirst={index === 0} key={p.name} weight={p.weight} name={p.name} />);

    let pathName = useLocation().pathname.slice(1).replace(/\w+\//gm, '');
    let currentProgramNumber = foodPrograms.findIndex(p => p.name.toLowerCase().replace(/\s+/g, '') === pathName);
    if (currentProgramNumber === -1) currentProgramNumber = 0;

    return <div className={c.mainContainer}>
        <div className={c.programNames}>
            {programNames}
        </div>
        <div className={c.programs}>
            {foodPrograms.length !== 0 && <Item {...foodPrograms[currentProgramNumber]} />}
        </div>
    </div>
};