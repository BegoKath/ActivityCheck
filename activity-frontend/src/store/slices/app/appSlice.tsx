import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
   openLoginEmail:boolean,
   navBarAdmin:boolean
}
const initialState:IAppState={
    openLoginEmail:false,
    navBarAdmin:true,
}
export const appSlice =createSlice({
    name:"app",
    initialState:initialState,
    reducers:{
        showLoginEmail:(state,action:PayloadAction<boolean>) =>{
            state.openLoginEmail=action.payload;
        },
        setNavBarAdmin:(state,action:PayloadAction<boolean>)=>{
            state.navBarAdmin =action.payload;
        }
    }
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;