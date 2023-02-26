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
    const showClassroomBody = ()=> dispatch(appActions.setClassroomBody(true));
    const closeClassroomBody = ()=> dispatch(appActions.setClassroomBody(false));
    const showScheduleBody = ()=> dispatch(appActions.setScheduleBody(true));
    const closeScheduleBody = ()=> dispatch(appActions.setScheduleBody(false));
    const showTimeBody = ()=> dispatch(appActions.setTimeBody(true));
    const closeTimeBody = ()=> dispatch(appActions.setTimeBody(false));
    return{
        state,
        showDialogLogin,
        closeDialogLogin,
        showNavBarAdmin,
        closeNavBarAdmin,
        showSubjectBody,
        closeSubjectBody,
        showTeacherBody,
        closeTeacherBody,
        showClassroomBody,
        closeClassroomBody,
        showScheduleBody,
        closeScheduleBody,
        showTimeBody,
        closeTimeBody
    }
}
