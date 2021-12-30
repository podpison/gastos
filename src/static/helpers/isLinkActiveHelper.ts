import { Location } from "history";
import { match as Match } from "react-router-dom";

export const isLinkActiveHelper = (match: Match | null, location: Location, isFirst: boolean, to: string, schedulePath?: string, programName?: string, isItFoodProgramsInNav?: boolean) => {
    if (location.pathname === '/' || location.pathname === schedulePath || location.pathname === '/foodPrograms') {
        return isFirst; //for the first element in each array
    };
    if (location.pathname === to) {
        return true; //path that will be after click
    };
    if (programName) {
        return location.pathname.replace(/foodPrograms\//gm, '').includes(programName);
        //for the first food program name when path includes 'foodPrograms'
    }
    if (isItFoodProgramsInNav) {
        if (location.pathname === '/' || location.pathname.includes('foodPrograms')) {
            return true;
        }
    }
    return false;
};