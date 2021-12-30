import c from "./doOrder.module.scss";
import { Checkbox as MUICheckbox } from "@mui/material";
import { useState } from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CircleIcon from "@mui/icons-material/Circle";

type Props = {
    description: string
}

export const Checkbox: React.FC<Props> = ({description}) => {
    let [isChecked, setIsChecked] = useState(false);

    const onCheckboxClick = () => setIsChecked(!isChecked);

    return <div className={c.checkboxContainer}>
        <MUICheckbox icon={<CircleOutlinedIcon className={c.icon} />} checkedIcon={<CircleIcon className={c.checkedIcon} />} className={c.checkbox} checked={isChecked} onClick={onCheckboxClick} size='small' />
        <p className={c.checkboxName}>{description}</p>
    </div>
};