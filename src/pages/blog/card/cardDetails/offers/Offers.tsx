import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBlogItemsSelector } from "../../../../../redux/selectors";
import { BlogItemType } from "../../../../../redux/staticReducer";
import { Card } from "../../Card";
import c from "./offers.module.scss";

export const Offers: React.FC = () => {
    let blogItems = useSelector(getBlogItemsSelector);
    let newBlogItems: BlogItemType[] = [];

    let currentBlogId = useLocation().pathname.replace(/\/blog\//, '');

    if (blogItems) {
        for (let i = 0; i <= 2; i++) {
            let id = Math.floor(Math.random() * blogItems?.length);
            if (id !== Number(currentBlogId)) {
                if (!newBlogItems[id]) {
                    newBlogItems.push(blogItems[id]);
                };
            }
        };
    };
    let BlogItems = newBlogItems.map((i, index) => <Card key={index} path={`/blog/${index}`} mainImage={i.mainImage} headline={i.headline} date={i.date} />);

    return <div className={c.container}>
        <p className={c.sign}>Вас может заинтересовать:</p>
        <div className={c.itemsContainer}>
            {BlogItems}
        </div>
    </div>
}