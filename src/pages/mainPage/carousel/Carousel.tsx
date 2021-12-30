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

export const Carousel: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('carouselItems'));
    }, [dispatch]);

    let CarouselItems = useSelector(getCarouselItemsSelector).map(i => <CarouselItem key={i.price} {...i} />)
    let _carouselItemsLength = CarouselItems.length - 1;

    let [currentIndex, setCurrentIndex] = useState(0);
    let setNextIndex = () => currentIndex === _carouselItemsLength ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    let setPrevIndex = () => currentIndex === 0 ? setCurrentIndex(_carouselItemsLength) : setCurrentIndex(currentIndex - 1);

    let renderIndicator = (onClick: any, isSelected: boolean, index: number) => {
        let Dot = currentIndex === index ? <CircleIcon onClick={() => setCurrentIndex(index)} className={`${c.selected} ${c.dot}`} /> : <CircleOutlinedIcon className={c.dot} onClick={() => setCurrentIndex(index)} />;

        if (index === 0) {
            return <>
                <ArrowBackIcon className={c.arrow} onClick={setPrevIndex} />
                {Dot}
            </>
        };
        if (index === _carouselItemsLength) {
            return <>
                {Dot}
                <ArrowForwardIcon className={c.arrow} onClick={setNextIndex} />
            </>
        }
        return Dot;
    };

    return <div className={c.mainContainer}>
        <PackageCarousel showArrows={false} showStatus={false} renderIndicator={renderIndicator} showThumbs={false} selectedItem={currentIndex} className={c.carouselContainer}>
            {CarouselItems}
        </PackageCarousel>
    </div>
};