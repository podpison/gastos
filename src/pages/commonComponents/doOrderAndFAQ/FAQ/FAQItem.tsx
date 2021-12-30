import { Accordion, AccordionSummary, AccordionDetails, TextField } from "@mui/material";
import c from "./FAQ.module.scss";
import Arrow from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";

type Props = {
    updateUserCred?: (credField: string, newValue: string) => void
    setExpanded: (value: string | false) => void //this one is for variant click
    expandedChange: (item: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void //this one if for accordion changing
    expanded: string | false
    type: 'clickable' | 'input' | 'information'
    headline: string
    variants: string[] | undefined
}

export const FAQItem: React.FC<Props> = ({ updateUserCred, setExpanded, expandedChange, expanded, type, headline, variants }) => {
    const changedHeadline = headline.replace(/(^\w|\s\w)/g, m => m.toUpperCase()).replace(/ /g, '');
    const onClickHandler = (text: string) => {
        if (updateUserCred) updateUserCred(changedHeadline, text);
        setExpanded(false);
    }
    
    const [value, setValue] = useState('');
    useEffect(() => {
        if (type === 'input') {
            if (updateUserCred) updateUserCred(changedHeadline, value);
        }
    }, [value, changedHeadline, type, updateUserCred]);

    let Variants = variants ? variants.map(v => type === 'clickable' ? <p key={v} className={`${c.detailsItem} ${c.clickable}`} onClick={() => onClickHandler(v)}>{v}</p> : <p className={c.detailsItem} key={v}>{v}</p>)
    : <TextField fullWidth className={c.detailsItem} onChange={e => setValue(e.target.value)} value={value} variant='standard' />
    
    return <Accordion classes={{root: c.offUnderline}} expanded={expanded === headline} onChange={expandedChange(headline)} square className={expanded === headline ? `${c.container} ${c.active}` : c.container}>
        <AccordionSummary classes={{root: c.accordion}} expandIcon={<Arrow />} className={c.header}>{headline} </AccordionSummary>
        <AccordionDetails className={c.variants}>{Variants}</AccordionDetails>
    </Accordion>
};