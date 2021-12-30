import { TextField as MUITextField } from "@mui/material";
import { useEffect, useState } from "react";
import c from "./doOrder.module.scss";

type Props = {
    rerender?: (message: string) => void
    id: string
    helperText: string
    type: 'name' | 'phone';
    changeValue: (value: string) => void
    value: string
}

export const TextField: React.FC<Props> = ({ rerender, id, helperText, type, changeValue, value }) => {
    let [isStatusShown, setIsStatusShown] = useState<null | boolean>(null);
    let textfieldClasses = '';
    const showStatus = () => {
        switch (isStatusShown) {
            case null:
                textfieldClasses = c.textfieldName;
                return <div className={c.noneStatus} />
            case true:
                textfieldClasses = `${c.textfieldName} ${c.textfieldNameGood}`;
                return <div className={c.goodStatus} />
            case false:
                textfieldClasses = `${c.textfieldName} ${c.textfieldNameBad}`;
                return <div className={c.badStatus} />
        };
    };
    let Status = showStatus();

    useEffect(() => {
        //eslint-disable-next-line
        const nameRegExp = /^([A-Za-z]+[\-\']?)$/;
        const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
        let testString = type === 'name' ? nameRegExp : phoneRegExp;

        let form = document.getElementById(id);
        const listener = () => {
            value === '' ? setIsStatusShown(null) : setIsStatusShown(testString.test(value));
            if (rerender) rerender(value);
        };
        
        form?.addEventListener(('focusout'), listener);
        return () => form?.removeEventListener('focusout', listener);
    }, [value, type, id, rerender]);

    return <div id={id} className={c.textfieldMainContainer}>
        <p className={textfieldClasses}>{helperText}</p>
        <div className={c.textFieldContainer}>
            <MUITextField fullWidth InputProps={{disableUnderline: true}} id={id} className={c.textField} variant='standard' value={value} onChange={(e) => changeValue(e.target.value)} />
            {Status}
        </div>
    </div>
}