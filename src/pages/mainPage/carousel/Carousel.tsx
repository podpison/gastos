import {Carousel as PackageCarousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import c from './carousel.module.scss';
import { useEffect, useState } from "react";
import { CarouselItem } from "./CarouselItem";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from "react-redux";
import { getStaticItems } from "../../../redux/staticReducer";
import { getCarouselItemsSelector } from "../../../redux/selectors";
import { useModalStatusChanger } from "../../../static/helpers/useModalStatusChanger";

export const Carousel: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('carouselItems'));
    }, [dispatch]);

    const changeModalStatus = useModalStatusChanger();

    let CarouselItems = useSelector(getCarouselItemsSelector).map((i, index) => <CarouselItem openModal={changeModalStatus} key={index} {...i} />)
    let _carouselItemsLength = CarouselItems.length - 1;

    let [currentIndex, setCurrentIndex] = useState(0);
    let setNextIndex = () => currentIndex === _carouselItemsLength ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    let setPrevIndex = () => currentIndex === 0 ? setCurrentIndex(_carouselItemsLength) : setCurrentIndex(currentIndex - 1);

    let renderIndicator = (onClick: any, isSelected: boolean, index: number) => {
        let Dot = currentIndex === index ? <CircleIcon onClick={() => setCurrentIndex(index)} className={`${c.selected} ${c.dot}`} /> : <CircleOutlinedIcon className={c.dot} onClick={() => setCurrentIndex(index)} />;

        if (index === 0) {
            return <>
                <div onClick={setPrevIndex} className={c.arrowContainer}><ArrowBackIcon className={c.arrow} /></div>
                {Dot}
            </>
        };
        if (index === _carouselItemsLength) {
            return <>
                {Dot}
                <div onClick={setNextIndex} className={`${c.arrowContainer} ${c.arrowNextContainer}`}><ArrowForwardIcon className={c.arrow} /></div>
            </>
        }
        return Dot;
    };

    return <div className={c.mainContainer}>
        <PackageCarousel swipeable={false} showArrows={false} showStatus={false} renderIndicator={renderIndicator} showThumbs={false} selectedItem={currentIndex} className={c.carouselContainer}>
            {CarouselItems}
        </PackageCarousel>
    </div>
};