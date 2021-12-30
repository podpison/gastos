import c from "./foodPictures.module.css";

type Props = {
    id: string
    src: string
}

export let Picture: React.FC<Props> = ({id, src}) => {
    return <div id={id} className={c.imgContainer}>
        <img className={c.img} src={src} alt='' />
    </div>
};