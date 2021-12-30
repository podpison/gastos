import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStaticItems } from "../../../redux/staticReducer";
import { DoOrder } from "./doOrder/DoOrder";
import { FAQ } from "./FAQ/FAQ";
import { getFAQSelector } from "../../../redux/selectors";
import c from "./doOrderAndFAQ.module.scss";

export const DoOrderAndFAQ: React.FC = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('FAQ'));
    }, [dispatch]);

    let FAQObject = useSelector(getFAQSelector);

    return <div className={c.container}>
        <DoOrder />
        {FAQObject !== undefined && FAQObject.length !== 0 ? <FAQ items={FAQObject[1].mainPageFAQ} /> : []}
    </div>
}