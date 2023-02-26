import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClassroom } from "../../../interfaces/IClassroom";
import { ISchedule } from "../../../interfaces/ISchedule";
import { ISubject } from "../../../interfaces/ISubject";
import { ITime } from "../../../interfaces/ITime";

export interface IActivitiesState{
    subjects:ISubject[],
    classrooms:IClassroom[],
    times:ITime[],
    schedules:ISchedule[]
}
const initialState:IActivitiesState={
    subjects:[],
    classrooms:[],
    times:[],
    schedules:[]
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
        },
        setTimes:(state,action:PayloadAction<ITime[]>) =>{
            state.times=action.payload;
        },
        setSchedules:(state,action:PayloadAction<ISchedule[]>) =>{
            state.schedules=action.payload;
        },
    
    }
})
export const activitiesActions = activitiesSlice.actions;
export const activitiesReducer = activitiesSlice.reducer;