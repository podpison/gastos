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
    headlineCode?: string
}

export const FAQItem: React.FC<Props> = ({ updateUserCred, setExpanded, expandedChange, expanded, type, headline, variants, headlineCode }) => {
    const onClickHandler = (text: string) => {
        if (updateUserCred && headlineCode) updateUserCred(headlineCode, text);
        setExpanded(false);
    }
    
    const [value, setValue] = useState('');
    useEffect(() => {
        if (type === 'input') {
            if (updateUserCred && headlineCode) updateUserCred(headlineCode, value);
        }
    }, [value, headlineCode, type, updateUserCred]);

    let Variants = variants ? variants.map(v => type === 'clickable' ? <p key={v} className={`${c.detailsItem} ${c.clickable}`} onClick={() => onClickHandler(v)}>{v}</p> : <p className={c.detailsItem} key={v}>{v}</p>)
    : <TextField fullWidth className={c.detailsItem} onChange={e => setValue(e.target.value)} value={value} variant='standard' />
    
    return <Accordion classes={{root: c.offUnderline}} expanded={expanded === headline} onChange={expandedChange(headline)} square className={expanded === headline ? `${c.container} ${c.active}` : c.container}>
        <AccordionSummary classes={{root: c.accordion}} expandIcon={<Arrow className={c.expandIcon} />} className={c.header}>{headline} </AccordionSummary>
        <AccordionDetails className={c.variants}>{Variants}</AccordionDetails>
    </Accordion>
};