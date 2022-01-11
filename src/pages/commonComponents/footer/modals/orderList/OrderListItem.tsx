import c from "./orderList.module.scss";

type Props = {
    name: string
    count: number
}

export const OrderListItem: React.FC<Props> = ({name, count}) => {
    return <p className={c.item}>{name} - {count} шт.</p>
}