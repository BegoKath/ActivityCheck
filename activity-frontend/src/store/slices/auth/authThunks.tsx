import { Dispatch } from "@reduxjs/toolkit"
import { LoginService } from "../../../services/LoginService"

const loginWithEmail=(email:string,password:string):any=>async(dispatch:Dispatch)=>{
    const res= await LoginService.loginWithEmail(email,password);
    console.log(res);
}
export const authThunks= {
    loginWithEmail
}