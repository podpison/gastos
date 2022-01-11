import c from './carousel.module.scss';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { staticActions } from '../../../redux/staticReducer';

type Props = {
    openModal: (modalName: 'onlineModal' | 'phoneModal', status: boolean) => void
    mainDescription: string
    countDescription: string
    img: string
    price: number
    programName: string
}

export let CarouselItem: React.FC<Props> = ({openModal, mainDescription, countDescription, img, price, programName}) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {
        openModal('onlineModal', true);
        dispatch(staticActions.setProductToOnlineOrderModal({name: programName, price, count: 1}));
    };
    
    return <div className={c.itemContainer}>
        <div>
            <div className={c.programDescription}>
                <p className={c.mainDescription}>{mainDescription}</p>
                <p className={c.secondDescription}>{countDescription}</p>
            </div>
            <div className={c.orderAndPrice}>
                <Button onClick={onClickHandler} className={c.button} color='primary'>Заказать</Button>
                <div className={c.price}>
                    <small>Пробный день всего:</small>
                    <p className={c.greenSign}><span className={c.greenSign}>{price} грн</span></p>
                </div>
            </div>
        </div>
        <div className={c.imgContainer}>
            <img className={c.img} alt='' src={img} />
        </div>
    </div>
};