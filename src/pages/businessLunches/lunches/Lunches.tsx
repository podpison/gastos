import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLunchItemsSelector } from "../../../redux/selectors";
import { getStaticItems } from "../../../redux/staticReducer";
import { Lunch } from "./lunch/Lunch";
import c from "./lunches.module.scss";
import { OnlineOrderModal } from "./../../commonComponents/doOrderAndFAQ/doOrder/modals/OnlineOrderModal";
import { Button } from "../../commonComponents/button/Button";

export const Lunches: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('lunchItems'));
    }, [dispatch]);

    let Lunches = useSelector(getLunchItemsSelector)?.map((l, index) => <Lunch key={index} {...l} />);
    const [isModalShown, setIsModalShown] = useState(false);

    return <div className={c.container}>
        {isModalShown && <OnlineOrderModal name='' phone='' closeModal={() => setIsModalShown(false)} isOpen={isModalShown} />}
        <Button openModal={setIsModalShown} />
        <div className={c.lunchesContainer}>
            {Lunches}
        </div>
    </div>
};