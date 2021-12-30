import c from './../item.module.css';

type Props = {
    name: string
    price: string
}

export let OrderItem: React.FC<Props> = ({name, price}) => {
    return <div className={c.orderItemContainer}>
        <p>{name}</p>
        <p>{price}</p>
    </div>
};