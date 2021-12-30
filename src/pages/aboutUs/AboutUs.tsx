import { AboutGastroChef } from "./aboutGastroChef/AboutGastroChef";
import { ShopHistory } from "./shopHistory/ShopHistory";
import { ShopOwner } from "./shopOwner/ShopOwner";
import c from "./aboutUs.module.scss";

export const AboutUs: React.FC = () => {
    return <div className={c.container}>
        <ShopOwner />
        <ShopHistory />
        <AboutGastroChef />
        <div className={c.circles}>
            <div className={c.circle1} />
            <div className={c.circle2} />
            <div className={c.circle3} />
            <div className={c.circle4} />
            <div className={c.circle5} />
            <div className={c.circle6} />
            <div className={c.circle7} />
            <div className={c.circle8} />
            <div className={c.circle9} />
            <div className={c.circle10} />
        </div>
    </div>
};