import { TextField as MUITextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNameAndPhoneSelector } from "../../../../redux/selectors";
import { staticActions } from "../../../../redux/staticReducer";
import c from "./doOrder.module.scss";

type Props = {
    rerender?: (message: string) => void
    id: string
    helperText: string
    type: 'name' | 'phone';
}
//eslint-disable-next-line
const nameRegExp = /\p{L}/u;
const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

export const TextField: React.FC<Props> = ({ rerender, id, helperText, type }) => {
    const dispatch = useDispatch();
    const valueChanger = (nameOrPhone: 'name' | 'phone', newWord: string) => {
        dispatch(staticActions.setNameOrPhone(nameOrPhone, newWord));
    };
    let nameAndPhone = useSelector(getNameAndPhoneSelector);
    
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
        let testString = type === 'name' ? nameRegExp : phoneRegExp;
        nameAndPhone[type] === '' ? setIsStatusShown(null) : setIsStatusShown(testString.test(nameAndPhone[type]));
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        let testString = type === 'name' ? nameRegExp : phoneRegExp;
        let form = document.getElementById(id);
        const listener = () => {
            nameAndPhone[type] === '' ? setIsStatusShown(null) : setIsStatusShown(testString.test(nameAndPhone[type]));
            if (rerender) rerender(nameAndPhone[type]);
        };
        listener();

        form?.addEventListener(('focusout'), listener);
        return () => form?.removeEventListener('focusout', listener);
    }, [nameAndPhone, type, id, rerender]);

    return <div id={id} className={c.textfieldMainContainer}>
        <p className={textfieldClasses}>{helperText}</p>
        <div className={c.textFieldContainer}>
            <MUITextField type={type === 'name' ? 'text' : 'number'} fullWidth InputProps={{disableUnderline: true}} id={id} className={c.textField} variant='standard' value={nameAndPhone[type]} onChange={(e) => valueChanger(type, e.target.value)} />
            {Status}
        </div>
    </div>
}