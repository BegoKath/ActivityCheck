import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  openLoginEmail: boolean;
  openDialogSchedule: boolean;
  navBarAdmin: boolean;
  subjectBody: boolean;
  teacherBody: boolean;
  classroomBody: boolean;
  scheduleBody:boolean;
  timeBody:boolean;
}
const initialState: IAppState = {
  openLoginEmail: false,
  openDialogSchedule:false,
  navBarAdmin: true,
  subjectBody: false,
  teacherBody: false,
  classroomBody: false,
  scheduleBody:true,
  timeBody:false
};
export const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    showLoginEmail: (state, action: PayloadAction<boolean>) => {
      state.openLoginEmail = action.payload;
    },
    setDialogSchedule: (state, action: PayloadAction<boolean>) => {
      state.openDialogSchedule = action.payload;
    },
    setNavBarAdmin: (state, action: PayloadAction<boolean>) => {
      state.navBarAdmin = action.payload;
    },
    setSubjectBody: (state, action: PayloadAction<boolean>) => {
      state.subjectBody = action.payload;
    },
    setTeacherBody: (state, action: PayloadAction<boolean>) => {
      state.teacherBody = action.payload;
    },
    setClassroomBody: (state, action: PayloadAction<boolean>) => {
      state.classroomBody = action.payload;
    },
    setScheduleBody:(state, action: PayloadAction<boolean>)=>{
      state.scheduleBody = action.payload;
    },
    setTimeBody:(state, action: PayloadAction<boolean>)=>{
      state.timeBody = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
