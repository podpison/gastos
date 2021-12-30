import { LunchesDescription } from "./lunchesDescription/LunchesDescription";
import { Lunches } from "./lunches/Lunches";

export const BusinessLunches: React.FC = () => {
    return <div>
        <LunchesDescription />
        <Lunches />
    </div>
};