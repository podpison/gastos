import { useEffect, useState } from "react";
import Minus from "@mui/icons-material/Remove";
import Plus from "@mui/icons-material/Add";
import c from "./lunch.module.scss";
import { LunchType, staticActions } from "../../../../redux/staticReducer";
import { useDispatch } from "react-redux";

export const Lunch: React.FC<LunchType> = ({image, name, weight, calories, price, products}) => {
    let Products = products.map((p, index) => <li key={index}>{p}</li>);

    const [lunchCount, setLunchCount] = useState(0);

    const dispatch = useDispatch();
    useEffect(() => {
        lunchCount !== 0 && dispatch(staticActions.setProductToOnlineOrderModal({name, price, count: lunchCount}));
    }, [lunchCount, dispatch, name, price]);

    return <div className={c.container}>
        <img className={c.img} src={image} alt='lunch' />
        <div className={c.header}>
            <p className={c.name}>{name}</p>
            <p>{weight} г</p>
            <p className={c.calories}>{calories} ккал</p>
        </div>
        <ol className={c.productsContainer}>
            {Products}
        </ol>
        <div className={c.footer}>
            <div className={c.lunchCountContainer}>
                <div className={c.symbolContainer} onClick={() => lunchCount !== 0 && setLunchCount(lunchCount - 1)}><Minus className={c.symbol} /></div>
                <p className={c.count}>{lunchCount}</p>
                <div className={c.symbolContainer} onClick={() => setLunchCount(lunchCount + 1)}><Plus className={c.symbol} /></div>
            </div>
            <p className={c.price}>1 порция \ {price} грн</p>
        </div>
    </div>
};