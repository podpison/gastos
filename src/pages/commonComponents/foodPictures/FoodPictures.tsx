import { useDispatch, useSelector } from "react-redux";
import { Picture } from "./Picture";
import c from "./foodPictures.module.css";
import { useEffect } from "react";
import { getStaticItems } from "../../../redux/staticReducer";
import { getFoodPicturesSelector } from "../../../redux/selectors";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const FoodPictures: React.FC = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('foodPictures'));
    }, [dispatch]);

    let pictures = useSelector(getFoodPicturesSelector)[0];
    let Pictures = pictures ? pictures.pictures.map((p, index) => <Picture id={index.toString()} key={index} src={p} />) : [];

    const responsive = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2.8
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2.4
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1.2
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1
            }
        },
    ];

    return <div className={c.mainContainer}>
        <p className={c.sign}>Фото блюд</p>
        <Carousel dots={false} swipeToSlide infinite responsive={responsive} slidesToShow={4} slidesToScroll={1}>
            {Pictures}
        </Carousel>
    </div>
};