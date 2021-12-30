import c from './carousel.module.scss';
import { Button } from '@mui/material';

type Props = {
    mainDescription: string
    countDescription: string
    img: string
    price: string
}

export let CarouselItem: React.FC<Props> = ({mainDescription, countDescription, img, price}) => {
    return <div className={c.itemContainer}>
        <div>
            <div className={c.programDescription}>
                <p className={c.mainDescription}>{mainDescription}</p>
                <p className={c.secondDescription}>{countDescription}</p>
            </div>
            <div className={c.orderAndPrice}>
                <Button className={c.button} color='primary'>Заказать</Button>
                <div className={c.price}>
                    <small>Пробный день всего:</small>
                    <p className={c.greenSign}><span className={c.greenSign}>{price}</span></p>
                </div>
            </div>
        </div>
        <div className={c.imgContainer}>
            <img className={c.img} alt='' src={img} />
        </div>
    </div>
};