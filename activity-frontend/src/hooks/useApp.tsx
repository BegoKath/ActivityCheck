import { useDispatch, useSelector } from "react-redux";
import { appActions, IAppState } from "../store/slices/app/appSlice";

export const useApp = () => {
  const state = useSelector((state: any) => state.app) as IAppState;
  const dispatch = useDispatch();

  const showDialogLogin = () => dispatch(appActions.showLoginEmail(true));
  const closeDialogLogin = () => dispatch(appActions.showLoginEmail(false));
  const showNavBarAdmin = () => dispatch(appActions.setNavBarAdmin(true));
  const closeNavBarAdmin = () => dispatch(appActions.setNavBarAdmin(false));
  const showNavBarTeacher = () => dispatch(appActions.setNavBarTeacher(true));
  const closeNavBarTeacher = () => dispatch(appActions.setNavBarTeacher(false));
  const showSubjectBody = () => dispatch(appActions.setSubjectBody(true));
  const closeSubjectBody = () => dispatch(appActions.setSubjectBody(false));
  const showTeacherBody = () => dispatch(appActions.setTeacherBody(true));
  const closeTeacherBody = () => dispatch(appActions.setTeacherBody(false));
  const showClassroomBody = () => dispatch(appActions.setClassroomBody(true));
  const closeClassroomBody = () => dispatch(appActions.setClassroomBody(false));
  const showScheduleBody = () => dispatch(appActions.setScheduleBody(true));
  const closeScheduleBody = () => dispatch(appActions.setScheduleBody(false));
  const showTimeBody = () => dispatch(appActions.setTimeBody(true));
  const closeTimeBody = () => dispatch(appActions.setTimeBody(false));
  const showActivityBody = () => dispatch(appActions.setActivityBody(true));
  const closeActivityBody = () => dispatch(appActions.setActivityBody(false));
  const showDialogSchedule = () => dispatch(appActions.setDialogSchedule(true));
  const closeDialogSchedule = () =>
    dispatch(appActions.setDialogSchedule(false));
  const showFaceRegister = () => dispatch(appActions.showFaceRegister());
  const closeFaceRegister = () => dispatch(appActions.closeFaceRegister());
  const showReportBody = () => dispatch(appActions.setReportBody(true));
  const closeReportBody = () => dispatch(appActions.setReportBody(false));
  const showActivityBodyTeacher = () =>
    dispatch(appActions.setActivityBodyTeacher(true));
  const closeActivityBodyTeacher = () =>
    dispatch(appActions.setActivityBodyTeacher(false));
  return {
    state,
    showDialogLogin,
    closeDialogLogin,
    showNavBarAdmin,
    closeNavBarAdmin,
    showNavBarTeacher,
    closeNavBarTeacher,
    showSubjectBody,
    closeSubjectBody,
    showTeacherBody,
    closeTeacherBody,
    showClassroomBody,
    closeClassroomBody,
    showScheduleBody,
    closeScheduleBody,
    showTimeBody,
    closeTimeBody,
    showDialogSchedule,
    closeDialogSchedule,
    showFaceRegister,
    closeFaceRegister,
    showActivityBody,
    closeActivityBody,
    showReportBody,
    closeReportBody,
    showActivityBodyTeacher,
    closeActivityBodyTeacher,
  };
};
