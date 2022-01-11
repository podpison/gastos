import { Button } from "@mui/material";
import { OrderInfoType, staticActions } from "../../../../../redux/staticReducer";
import { OrderItem } from "./OrderItem";
import c from "./../item.module.css";
import { useDispatch } from "react-redux";
import { useModalStatusChanger } from "../../../../../static/helpers/useModalStatusChanger";

type Props = {
    name: string
    weigth: string
    price: number
    description: string
    orderInfo: OrderInfoType
};

export const Sidebar: React.FC<Props> = ({name, weigth, price, description, orderInfo}) => {
    const dispatch = useDispatch();
    const changeModalStatus = useModalStatusChanger();
    const onClickHandler = () => {
        changeModalStatus('onlineModal', true);
        dispatch(staticActions.setProductToOnlineOrderModal({name, price, count: 1}));
    };

    let OrderItems = orderInfo.map(i => <OrderItem key={i.name} name={i.name} price={i.price} />);

    return <div className={c.sidebar}>
        <div className={c.description}>
            <div className={c.descriptionHeader}>
                <p className={c.sidebarName}>{name}</p>
                <p className={c.sidebarWeight}>{weigth}</p>
                <p className={c.sidebarPrice}>{price} грн</p>
            </div>
            <p className={c.sidebarDescription}>{description}</p>
        </div>
        <div className={c.orderItems}>
            {OrderItems}
        </div>  
        <div className={c.sidebarButtonContainer}>
            <Button onClick={onClickHandler} className={c.sidebarButton}>Заказать</Button>
        </div>
    </div>
};