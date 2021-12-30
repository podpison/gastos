import { Pagination as MUIPagination } from "@mui/material";
import { useEffect, useState } from "react";
import c from "./pagination.module.scss";

type Props = {
    Cards: JSX.Element[] | undefined
    getCurrentPage: (currentPage: number) => number
}

export const Pagination: React.FC<Props> = ({Cards, getCurrentPage}) => {
    const [currentPage, setCurrentPage] = useState(1);
    let portionSize = Cards && Math.ceil(Cards.length / 9);
    
    const onPaginationChange = (event: React.ChangeEvent<unknown>, value: number) => setCurrentPage(value);
    
    useEffect(() => {
        getCurrentPage(currentPage);
    }, [currentPage, getCurrentPage]);

    return <MUIPagination className={c.pagination} count={portionSize} page={currentPage} onChange={onPaginationChange} variant='outlined' />
};