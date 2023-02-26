import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClassroom } from "../../../interfaces/IClassroom";
import { ISubject } from "../../../interfaces/ISubject";

export interface IActivitiesState{
    subjects:ISubject[],
    classrooms:IClassroom[]
}
const initialState:IActivitiesState={
    subjects:[],
    classrooms:[]

}
export const activitiesSlice = createSlice({
    name:"activities",
    initialState:initialState,
    reducers:{
        setSubjects:(state,action:PayloadAction<ISubject[]>) =>{
            state.subjects=action.payload;
        },
        setClassroom:(state,action:PayloadAction<IClassroom[]>) =>{
            state.classrooms=action.payload;
        }
    
    }
})
export const activitiesActions = activitiesSlice.actions;
export const activitiesReducer = activitiesSlice.reducer;