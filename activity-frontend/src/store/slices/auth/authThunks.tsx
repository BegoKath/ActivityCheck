import { Dispatch } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";
import { LoginService } from "../../../services/LoginService";
import { TeacherService } from "../../../services/TeacherService";
import { appActions } from "../app/appSlice";
import { authActions } from "./authSlice";

const loginWithEmail =
  (email: string, password: string): any =>
  async (dispatch: Dispatch) => {
    if (email === "admin@admin.com") {
      if (password === "123456") {
        dispatch(authActions.setAdmin(true));
        dispatch(appActions.setNavBarTeacher(false));
        return "ADMIN";
      }
    }
    const res = await LoginService.loginWithEmail(email, password);
    const teacher = res as ITeacher;
    if (typeof teacher !== "string") {
      dispatch(authActions.setAuth(true));
      dispatch(authActions.setTeacher(teacher));
      dispatch(appActions.setNavBarTeacher(true));
      return "OK";
    } else {
      return res;
    }
  };
const logInWithId =
  (id: number): any =>
  async (dispatch: Dispatch) => {
    dispatch(authActions.startLogging());
    const res = await TeacherService.getTeacherId(id);
    if (res) {
      dispatch(authActions.setTeacher(res as ITeacher));
      dispatch(authActions.stopLogging());
    } else {
      return;
    }
  };
export const authThunks = {
  loginWithEmail,
  logInWithId,
};
