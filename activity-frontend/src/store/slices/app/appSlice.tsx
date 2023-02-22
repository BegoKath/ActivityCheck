import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
   openLoginEmail:boolean,
   navBarAdmin:boolean,
   subjectBody:boolean,
   teacherBody:boolean,
}
const initialState:IAppState={
    openLoginEmail:false,
    navBarAdmin:true,
    subjectBody:false,
    teacherBody:false
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
        },
        setSubjectBody:(state,action:PayloadAction<boolean>)=>{
            state.subjectBody =action.payload;
        },
        setTeacherBody:(state,action:PayloadAction<boolean>)=>{
            state.teacherBody =action.payload;
        }
    }
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;