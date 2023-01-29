import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacher } from "../../../interfaces/ITeacher";


export interface ITeacherState {
    teachers:ITeacher[],
}
const initialState:ITeacherState={
    teachers:[]
}
export const teacherSlice =createSlice({
    name:"teacher",
    initialState:initialState,
    reducers:{
        setTeachers:(state,action:PayloadAction<ITeacher[]>) =>{
            state.teachers=action.payload;
        }
    }
});