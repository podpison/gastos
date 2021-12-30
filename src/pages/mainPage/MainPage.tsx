import { Advantages } from "./advantages/Advantages";
import { Carousel } from "./carousel/Carousel";
import { FoodPrograms } from "./foodPrograms/FoodPrograms";
import c from "./mainPage.module.scss";

export const MainPage: React.FC = () => {
    return <div>
        <Carousel />
        <div className={c.advantagesAndFoodProgramsContainer}>
            <Advantages />
            <FoodPrograms />
        </div>
        <div className={c.circles}>
            <div className={c.circle1} />
            <div className={c.circle2} />
            <div className={c.circle3} />
            <div className={c.circle4} />
            <div className={c.circle5} />
            <div className={c.circle6} />
        </div>
    </div>
}