import { Button, Card as MUICard, CardActions, CardContent, CardMedia } from "@mui/material";
import c from "./card.module.scss";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

type Props = {
    path: string
    mainImage: string
    headline: string
    date: string
}

export const Card: React.FC<Props> = ({ path, mainImage, headline, date }) => {
    return <MUICard className={c.mainContainer}>
        <CardMedia className={c.media} component='img' alt='food' image={mainImage} />
        <CardContent className={c.headline}>
            {headline}
        </CardContent>
        <CardActions className={c.actions}>
            <p className={c.date}>{date}</p>
            <Link to={path}>
                <Button className={c.button} variant='outlined'>
                    <p className={c.buttonSign}>Подробнее</p>
                    <Arrow className={c.buttonArrow} />
                </Button>
            </Link>
        </CardActions>
    </MUICard>
};