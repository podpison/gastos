import { useDispatch } from "react-redux";
import { staticActions } from "../../redux/staticReducer";

export const useModalStatusChanger = () => {
    const dispatch = useDispatch();
    return (modalName: 'onlineModal' | 'phoneModal', status: boolean) => {
        dispatch(staticActions.setModalShowStatus(modalName, status));
    };
}