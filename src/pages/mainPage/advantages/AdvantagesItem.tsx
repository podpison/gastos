import c from "./advantages.module.scss";

type Props = {
    img: string
    description: string
}

export let AdvantagesItem: React.FC<Props> = ({ img, description }) => {
    return <div className={c.itemContainer}>
        <img className={c.img} alt='advantages item' src={img} />
        <p className={c.description}>{description}</p>
    </div>
};