import { useState, useEffect } from "react";
import { GastroShopItemType, staticActions } from "../../../../redux/staticReducer";
import c from "./chapterDetail.module.scss";
import Minus from "@mui/icons-material/Remove";
import Plus from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";

export const ChapterDetail: React.FC<GastroShopItemType> = ({image, name, composition, calories, nutrients, price }) => {
    
    const [itemCount, setItemCount] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        itemCount !== 0 && dispatch(staticActions.setProductToOnlineOrderModal({name, price, count: itemCount}));
    }, [itemCount, dispatch, name, price]);

    return <div className={c.container}>
        <img className={c.img} src={image} alt='capter item' />
        <p className={c.name}>{name}</p>
        <div className={c.composition}>
            <p className={c.sign}>Состав: </p>
            <p>{composition}</p>
        </div>
        <div className={c.nutrients}>
            <p>Белки - {nutrients.proteins}</p>
            <p>Жиры - {nutrients.fats}</p>
            <p>Углеводы - {nutrients.carbohydrates}</p>
            <p>{calories} ккал</p>
        </div>
        <div className={c.footer}>
            <div className={c.lunchCountContainer}>
                <div className={c.symbolContainer} onClick={() => itemCount !== 0 && setItemCount(itemCount - 1)}><Minus className={c.symbol} /></div>
                <p className={c.count}>{itemCount}</p>
                <div className={c.symbolContainer} onClick={() => setItemCount(itemCount + 1)}><Plus className={c.symbol} /></div>
            </div>
            <p className={c.price}>{price} грн / 1 шт</p>
        </div>
    </div>
};