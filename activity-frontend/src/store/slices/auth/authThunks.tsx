import { Dispatch } from "@reduxjs/toolkit"
import { LoginService } from "../../../services/LoginService"
import { authActions } from "./authSlice";

const loginWithEmail=(email:string,password:string):any=>async(dispatch:Dispatch)=>{
    const res= await LoginService.loginWithEmail(email,password);   
    if(res==="Ok"){
        dispatch(authActions.setAuth(true));
        return "OK";
    }else{
        return res;
    }
}
export const authThunks= {
    loginWithEmail
}