import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdvantagesItemsSelector } from "../../../redux/selectors";
import { getStaticItems } from "../../../redux/staticReducer";
import { AdvantagesItem } from "./AdvantagesItem";
import c from "./advantages.module.scss";

export let Advantages = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('advantagesItems'));
    }, [dispatch]);

    let AdvantagesItems = useSelector(getAdvantagesItemsSelector).map(a => <AdvantagesItem key={a.description} {...a} />)

    return <div className={c.advantagesContainer}>
        {AdvantagesItems}
    </div>
};