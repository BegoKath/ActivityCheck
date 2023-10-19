import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
  openLoginEmail: boolean;
  openDialogSchedule: boolean;
  navBarAdmin: boolean;
  navBarTeacher: boolean;
  subjectBody: boolean;
  teacherBody: boolean;
  classroomBody: boolean;
  scheduleBody: boolean;
  timeBody: boolean;
  reportBody: boolean;
  activityBody: boolean;
  activityBodyTeacher: boolean;
  showFaceRegisterDialog: boolean;
}
const initialState: IAppState = {
  openLoginEmail: false,
  openDialogSchedule: false,
  navBarTeacher: false,
  showFaceRegisterDialog: false,
  navBarAdmin: true,
  subjectBody: false,
  teacherBody: false,
  classroomBody: false,
  scheduleBody: true,
  activityBody: false,
  timeBody: false,
  reportBody: false,
  activityBodyTeacher: false,
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
    setNavBarTeacher: (state, action: PayloadAction<boolean>) => {
      state.navBarTeacher = action.payload;
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
    setScheduleBody: (state, action: PayloadAction<boolean>) => {
      state.scheduleBody = action.payload;
    },
    setTimeBody: (state, action: PayloadAction<boolean>) => {
      state.timeBody = action.payload;
    },
    setReportBody: (state, action: PayloadAction<boolean>) => {
      state.reportBody = action.payload;
    },
    setActivityBody: (state, action: PayloadAction<boolean>) => {
      state.activityBody = action.payload;
    },
    setActivityBodyTeacher: (state, action: PayloadAction<boolean>) => {
      state.activityBodyTeacher = action.payload;
    },
    showFaceRegister: (state) => {
      state.showFaceRegisterDialog = true;
    },
    closeFaceRegister: (state) => {
      state.showFaceRegisterDialog = false;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
