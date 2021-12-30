import { ChapterDetail } from "./chaperDetail/ChapterDetail";
import { GastroShopItemType } from "../../../redux/staticReducer";
import c from "./chapterDetails.module.scss";
import Arrow from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import { Button } from "../../commonComponents/button/Button";
import { useState } from "react";
import { OnlineOrderModal } from "../../commonComponents/doOrderAndFAQ/doOrder/modals/OnlineOrderModal";

type Props = {
    items: GastroShopItemType[]
}

export const ChapterDetails: React.FC<Props> = ({ items }) => {
    let Chapters = items.map((i, index) => <ChapterDetail key={index} {...i} />);

    const [isModalShown, setIsModalShown] = useState(false);
    return <div className={c.container}>
        {isModalShown && <OnlineOrderModal name='' phone='' closeModal={() => setIsModalShown(false)} isOpen={isModalShown} />}
        <div className={c.goBackAndOrder}>
            <Link className={c.arrowContainer} to='/gastroShop'><Arrow className={c.arrow} /></Link>
            <Button openModal={() => setIsModalShown(true)} />
        </div>
        <div className={c.chaptersContainer}>
            {Chapters}
        </div>
    </div>
};