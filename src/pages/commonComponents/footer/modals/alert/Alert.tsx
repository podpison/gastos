import CheckIcon from "@mui/icons-material/Check";
import MUIAlert from "@mui/material/Alert";
import { useEffect } from "react";
import c from "./alert.module.scss";

type Props = {
    closeAlert: () => void
    isOrderedSuccessfully: boolean
}

export const Alert: React.FC<Props> = ({closeAlert, isOrderedSuccessfully}) => {
    useEffect(() => {
        if (isOrderedSuccessfully) {
            setTimeout(() => {
                closeAlert();
            }, 10000);
        }
    }, [isOrderedSuccessfully, closeAlert]);
    return <MUIAlert className={c.alert} icon={<CheckIcon className={c.icon} fontSize='inherit' />} severity='success'>Заказано успешно!</MUIAlert>
}