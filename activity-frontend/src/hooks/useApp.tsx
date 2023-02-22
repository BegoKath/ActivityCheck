import { useDispatch, useSelector } from "react-redux"
import { appActions, IAppState } from "../store/slices/app/appSlice"

export const useApp =()=>{
    const state = useSelector((state:any)=>state.app)  as IAppState;
    const dispatch = useDispatch();

    const showDialogLogin =()=> dispatch(appActions.showLoginEmail(true));
    const closeDialogLogin = ()=> dispatch(appActions.showLoginEmail(false));
    const showNavBarAdmin = ()=> dispatch(appActions.setNavBarAdmin(true));
    const closeNavBarAdmin = ()=> dispatch(appActions.setNavBarAdmin(false));
    const showSubjectBody = ()=> dispatch(appActions.setSubjectBody(true));
    const closeSubjectBody = ()=> dispatch(appActions.setSubjectBody(false));
    const showTeacherBody = ()=> dispatch(appActions.setTeacherBody(true));
    const closeTeacherBody= ()=> dispatch(appActions.setTeacherBody(false));
    return{
        state,
        showDialogLogin,
        closeDialogLogin,
        showNavBarAdmin,
        closeNavBarAdmin,
        showSubjectBody,
        closeSubjectBody,
        showTeacherBody,
        closeTeacherBody
    }
}
