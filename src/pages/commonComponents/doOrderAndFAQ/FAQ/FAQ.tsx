import { useState } from "react";
import { FAQItemType } from "../../../../redux/staticReducer";
import { FAQItem } from "./FAQItem";
import c from "./FAQ.module.scss";

type Props = {
    updateUserCred?: (credField: string, newValue: string) => void
    items: FAQItemType[]
}

export const FAQ: React.FC<Props> = ({ updateUserCred, items}) => {
    const [expanded, setExpanded] = useState<string | false>('');
    const expandedChange = (item: string) => (event: React.SyntheticEvent, newExpanded: boolean) => setExpanded(newExpanded ? item : false);

    let FAQItems = items.map((i, index) => <FAQItem updateUserCred={updateUserCred} key={index} setExpanded={setExpanded} expandedChange={expandedChange} expanded={expanded} type={i.type} headline={i.headline} variants={i.variants} />)
    
    return <div className={c.mainContainer}>
        <h2 className={c.sign}>Часто задаваемые вопросы</h2>
        {FAQItems}
    </div>
};