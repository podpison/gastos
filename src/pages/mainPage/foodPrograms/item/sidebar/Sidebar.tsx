import { Button } from "@mui/material";
import { OrderInfoType } from "../../../../../redux/staticReducer";
import { OrderItem } from "./OrderItem";
import c from "./../item.module.css";

type Props = {
    name: string
    weigth: string
    description: string
    orderInfo: OrderInfoType
};

export let Sidebar: React.FC<Props> = ({name, weigth, description, orderInfo}) => {

    let OrderItems = orderInfo.map(i => <OrderItem key={i.name} name={i.name} price={i.price} />);

    return <div className={c.sidebar}>
        <div className={c.description}>
            <div className={c.descriptionHeader}>
                <p className={c.sidebarName}>{name}</p>
                <p className={c.sidebarWeight}>{weigth}</p>
            </div>
            <p className={c.sidebarDescription}>{description}</p>
        </div>
        <div className={c.orderItems}>
            {OrderItems}
        </div>  
        <div className={c.sidebarButtonContainer}>
            <Button className={c.sidebarButton}>Заказать</Button>
        </div>
    </div>
};