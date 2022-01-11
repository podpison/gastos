import Arrow from "@mui/icons-material/ArrowBackIos";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import c from "./cardDetails.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Offers } from "./offers/Offers";

type Props = {
    mainImage: string
    text: string[]
    headline: string
    date: string
}

export const CardDetails: React.FC<Props> = ({ mainImage, text, headline, date }) => {
    let Text = text.map((t, index, array) => {
        if (t.includes('http')) {
            return <img className={c.foodImg} key={index} src={t} alt='food' />
        } else {
            if (array[index - 1]) {
                if (array[index - 1].includes('http')) {
                    return <p key={index} className={c.textImgPrevious}>{t}</p>
                }
            }
            return <p key={index} className={c.text}>{t}</p>
        }
    });

    return <div className={c.conatiner}>
        <img className={c.mainImage} alt='main' src={mainImage} />
        <div className={c.content}>
            <div className={c.headerContainer}>
                <Link className={c.arrowContainer} to='/blog'><Arrow className={c.arrow} /></Link>
                <div className={c.header}>
                    <p className={c.headline}>{headline}</p>
                    <div className={c.share}>
                        <p>Поделиться:</p>
                        <a href='https://www.instagram.com'><InstagramIcon /></a>
                        <a href='https://m.facebook.com'><FacebookIcon /></a>
                    </div>
                </div>
            </div>
            <p className={c.headlineMobile}>{headline}</p>
            <p className={c.date}>{date}</p>
            <div className={c.textContainer}>
                {Text}
            </div>
        </div>
            <Link className={c.link} to='/foodPrograms'>
                <Button className={c.button} variant='contained'>Программы Питания</Button>
            </Link>
        <Offers />
    </div>
};