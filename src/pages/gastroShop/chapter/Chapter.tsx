import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import c from "./chapter.module.scss";

type Props = {
    image: string
    name: string
    path: string
}

export const Chapter: React.FC<Props> = ({image, name, path}) => {
    return <div className={c.container}>
        <img className={c.img} src={image} alt='food chapter' />
        <div className={c.footer}>
            <p className={c.name}>{name}</p>
            <Link to={path}>
                <Button className={c.button} variant='outlined'>
                    <p className={c.buttonSign}>Ассортимент</p>
                    <Arrow className={c.buttonArrow} />
                </Button>
            </Link>
        </div>
    </div>
};