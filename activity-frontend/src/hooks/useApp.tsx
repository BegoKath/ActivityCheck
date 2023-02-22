import { useDispatch, useSelector } from "react-redux"
import { appActions, IAppState } from "../store/slices/app/appSlice"

export const useApp =()=>{
    const state = useSelector((state:any)=>state.app)  as IAppState;
    const dispatch = useDispatch();

    const showDialogLogin =()=> dispatch(appActions.showLoginEmail(true));
    const closeDialogLogin = ()=> dispatch(appActions.showLoginEmail(false));
    const showNavBarAdmin = ()=> dispatch(appActions.setNavBarAdmin(true));
    const closeNavBarAdmin = ()=> dispatch(appActions.setNavBarAdmin(false));

    return{
        state,
        showDialogLogin,
        closeDialogLogin,
        showNavBarAdmin,
        closeNavBarAdmin
    }
}
