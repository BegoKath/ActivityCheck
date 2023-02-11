import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
   openLoginEmail:boolean,
}
const initialState:IAppState={
    openLoginEmail:false
}
export const appSlice =createSlice({
    name:"app",
    initialState:initialState,
    reducers:{
        showLoginEmail:(state,action:PayloadAction<boolean>) =>{
            state.openLoginEmail=action.payload;
        }
    }
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;