import { Dispatch } from "@reduxjs/toolkit"
import { ITeacher } from "../../../interfaces/ITeacher";
import { LoginService } from "../../../services/LoginService"
import { TeacherService } from "../../../services/TeacherService";
import { authActions } from "./authSlice";

const loginWithEmail=(email:string,password:string):any=>async(dispatch:Dispatch)=>{
    if(email=== "admin@admin.com"){
        if(password==="123456"){
            dispatch(authActions.setAdmin(true));
            return "ADMIN";
        }
       
       }
    const res= await LoginService.loginWithEmail(email,password);   
    if(res==="Ok"){
        dispatch(authActions.setAuth(true));       
        return "OK";
    }else{
        return res;
    }
}
const logInWithId = (id:number):any => async (dispatch:Dispatch)=>{
    dispatch(authActions.startLogging());
    const res= await TeacherService.getTeacherId(id);
    if(res){
        dispatch(authActions.setTeacher(res as ITeacher));
        dispatch(authActions.stopLogging());
    }else{
        return;
    }
}
export const authThunks= {
    loginWithEmail,logInWithId
}