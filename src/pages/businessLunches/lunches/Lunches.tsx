import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLunchItemsSelector } from "../../../redux/selectors";
import { getStaticItems } from "../../../redux/staticReducer";
import { Lunch } from "./lunch/Lunch";
import c from "./lunches.module.scss";
import { Button } from "../../commonComponents/button/Button";
import { useModalStatusChanger } from "../../../static/helpers/useModalStatusChanger";

export const Lunches: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('lunchItems'));
    }, [dispatch]);

    let Lunches = useSelector(getLunchItemsSelector)?.map((l, index) => <Lunch key={index} {...l} />);
    
    const changeModalStatus = useModalStatusChanger();

    return <div className={c.container}>
        <Button openModal={() => changeModalStatus('onlineModal', true)} />
        <div className={c.lunchesContainer}>
            {Lunches}
        </div>
    </div>
};