import { useDispatch, useSelector } from "react-redux";
import { IAuthState } from "../store/slices/auth/authSlice";
import { authThunks } from "../store/slices/auth/authThunks";

export const useAuth = ()=>{
    const state = useSelector((state:any)=>state.auth) as IAuthState;
    const dispatch = useDispatch();
    
    const loginWithEmail = (email:string,password:string)=>dispatch(authThunks.loginWithEmail(email,password));
    return{
        state,
        loginWithEmail
    }
}