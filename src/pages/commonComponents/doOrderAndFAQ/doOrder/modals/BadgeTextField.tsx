import { TextField, Badge } from "@mui/material";
import c from "./modals.module.scss";
import { useEffect, useState } from "react";

type Props = {
    updateUserCred: (newValue: string) => void
    id: string
    placeholder?: string
    value?: string
    className?: string
    regExpType?: 'name' | 'phone' | 'street' | 'numbers'
    type: 'text' | 'number';
    maxLength?: number
    rerender: (message: string) => void
 }

export const BadgeTextField: React.FC<Props> = ({ updateUserCred, id, placeholder, value, className, regExpType = 'numbers', type, maxLength, rerender }) => {
    let [currentValue, setCurrentValue] = useState(value || '');

    useEffect(() => {
        updateUserCred(currentValue);
    }, [currentValue, updateUserCred]);

    let [isStatusShown, setIsStatusShown] = useState<null | boolean>(null);
    let textfieldClasses =  `${className} ${c.textField}`;
    let badgeClasses = '';
    switch (isStatusShown) {
        case null:
            badgeClasses = c.noneStatus;
            break;
        case true:
            textfieldClasses = `${className} ${c.textField} ${c.textfieldGood}`;
            badgeClasses = c.goodStatus;
            break;
        case false:
            textfieldClasses = `${className} ${c.textField} ${c.textfieldBad}`;
            badgeClasses = c.badStatus;
            break;
    };

    const changeCurrentValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxLength) {
            if (e.target.value.length > maxLength) return;
            else setCurrentValue(e.target.value);
        } else setCurrentValue(e.target.value)
    };

    useEffect(() => {
            //eslint-disable-next-line
            const nameRegExp = /^([A-Za-z]+[\-\']?)$/;
           //eslint-disable-next-line
            const streetRegExp = /^(?!\s*$)^((?!([p|P][-. ]?[o|O].?[- ]?|post office )[b|B]([ox|OX]))(?!(\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\"|\;|\:)).)*$/
            const phoneRegExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
            const numberRegExp = /^\d+$/;
            let getTestString = () => {
                switch (regExpType) {
                    case 'name':
                        return nameRegExp;
                    case 'phone':
                        return phoneRegExp;
                    case 'street':
                        return streetRegExp;
                    case 'numbers':
                        return numberRegExp;
                };
            }
            let testString = getTestString();

            let form = document.getElementById(id);
            let listener = () => {
                currentValue === '' ? setIsStatusShown(null) : setIsStatusShown(testString.test(currentValue));
                rerender(currentValue);
            };

            form?.addEventListener(('focusout'), listener);
            return () => form?.removeEventListener('focusout', listener);

    }, [currentValue, regExpType, id, rerender]);

    return <div id={id} className={c.badgeTextField}>
        <Badge badgeContent=' ' classes={{badge: badgeClasses}} invisible={false} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
            <TextField placeholder={placeholder} type={type} InputProps={{ disableUnderline: true }} id={id} variant='standard' className={textfieldClasses} value={currentValue} onChange={changeCurrentValue} />
        </Badge>
    </div>
};