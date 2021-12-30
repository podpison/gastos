import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogItemsSelector } from "../../redux/selectors";
import { getStaticItems } from "../../redux/staticReducer";
import { Card } from "./card/Card";
import c from "./blog.module.scss";
import { Route, Switch } from "react-router";
import { CardDetails } from "./card/cardDetails/CardDetails";
import { Pagination } from "./pagination/Pagination";

export const Blog: React.FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStaticItems('blogItems'));
    }, [dispatch]);

    let blogItems = useSelector(getBlogItemsSelector);
    let Cards = blogItems?.map((i, index) => <Card key={index} path={`/blog/${index}`} mainImage={i.mainImage} headline={i.headline} date={i.date} />)
    let _CardDetails = blogItems?.map((i, index) => <Route key={index} path={`/blog/${index}`} render={() => <CardDetails {...i} />} />);

    const getCurrentPage = (page: number) => currentPage = page;
    let currentPage = 1;

    return <>
        <Route exact path='/blog' render={() => {
            return <>
                <Pagination Cards={Cards} getCurrentPage={getCurrentPage} />
                <div className={c.container}>
                    {Cards?.slice(currentPage * 9 - 9, currentPage * 9 - 1)}
                </div>
            </>
        }} />
        <Switch>
            {_CardDetails}
        </Switch>
        <div className={c.circles}>
            <div className={c.circle1} />
            <div className={c.circle2} />
        </div>
    </>
};