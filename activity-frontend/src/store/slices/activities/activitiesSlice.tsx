import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubject } from "../../../interfaces/ISubject";

export interface IActivitiesState{
    subjects:ISubject[],
}
const initialState:IActivitiesState={
    subjects:[]
}
export const activitiesSlice = createSlice({
    name:"activities",
    initialState:initialState,
    reducers:{
        setSubjects:(state,action:PayloadAction<ISubject[]>) =>{
            state.subjects=action.payload;
        }
    }
})
export const activitiesActions = activitiesSlice.actions;
export const activitiesReducer = activitiesSlice.reducer;