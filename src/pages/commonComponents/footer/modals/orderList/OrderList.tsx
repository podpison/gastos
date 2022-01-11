import { OrderListItem } from "./OrderListItem";
import c from "./orderList.module.scss";
import { OnlineOrderModalProductType } from "../../../../../redux/staticReducer";

type Props = {
    items: OnlineOrderModalProductType[]
}

export const OrderList: React.FC<Props> = ({items}) => {
    let OnlineOrderModalProducts = items.map((p, index) => <OrderListItem key={index} name={p.name} count={p.count} />)
    return <div className={c.container}>
        {OnlineOrderModalProducts}
    </div>
}