import { getGastroShopItemsSelector } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Chapter } from "./chapter/Chapter";
import { Route, Switch } from "react-router";
import { ChapterDetails } from "./chapterDetails/ChapterDetails";
import c from "./gastroShop.module.scss";
import { getStaticItems } from "../../redux/staticReducer";
import { useEffect } from "react";

export const GastroShop: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('gastroShopItems'));
    }, [dispatch]);

    let chapters = useSelector(getGastroShopItemsSelector);
    let Chapters = chapters?.map((c, index) => <Chapter key={index} path={`/gastroShop/${index}`} image={c.image} name={c.name} />);
    let _ChapterDetails = chapters?.map((c, index) => <Route key={index} path={`/gastroShop/${index}`} render={() => <ChapterDetails items={c.items} />} />);
    return <>
        <Route exact path='/gastroShop' render={() => {
            return <div className={c.container}>
                {Chapters}
                <div className={c.circles}>
                    <div className={c.circle1} />
                    <div className={c.circle2} />
                </div>
            </div>
        }} />
        <Switch>
            {_ChapterDetails}
        </Switch>
    </>
};